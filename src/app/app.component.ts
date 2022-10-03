import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster.service';
// import { movie_mocks } from '../assets/data/movie_mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  $destroy: Subject<void> = new Subject();

  constructor(private _broadcaster: BroadcasterService) {
    // app component broadcasting
    this._broadcaster.broadcast('mykey', 'myvalue');
    //set dummy token just to enable auth guard for after-login module
    localStorage.setItem('token', 'newToken');

    /**
     * do this in other page, for e.g I'm doing here only
     * use this service with takeUntil from rxJS and local Subject to prevent memory leaks like shown
     */
    this._broadcaster
      .listen('mykey')
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => console.log(data), // your broadcasted value
      });
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
