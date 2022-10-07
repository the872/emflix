import { Component, OnInit } from '@angular/core';

import * as movies from '../../../../assets/data/movie_mocks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  allGenres: (Array<string> | undefined)[] | undefined;
  selectedGenres: [] | undefined;
  currentPage: string | null | undefined;
  ngOnInit() {
    const cLoc = new URL(window.location.href);
    this.currentPage = cLoc.search === '' ? '/' : cLoc.searchParams.get('genre');
    const finalArray: string[][] = [];
    movies.movie_mocks.forEach((a: { genres: Array<string> }) => {
      const resultGenres = a.genres;

      for (let b = 0; b < resultGenres.length; b++) {
        // @ts-ignore
        if (!finalArray.includes(resultGenres[b])) {
          // @ts-ignore
          finalArray.push(resultGenres[b]);
        }
      }
    });
    this.allGenres = finalArray;
  }
}
