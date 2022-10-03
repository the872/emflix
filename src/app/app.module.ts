import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { HTTPReqResInterceptor } from '@core/services/http-req-res.interceptor';
import { environment } from '@env';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { MovieCardModule } from '@core/components/movie-card/movie-card.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MovieGalleryModule } from '@features/movie-gallery/movie-gallery.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    LoadingBarRouterModule,
    HeaderModule,
    MovieCardModule,
    LoadingBarModule,
    MovieGalleryModule,
    LoadingBarRouterModule,
    LoadingBarModule,
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.baseurl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
