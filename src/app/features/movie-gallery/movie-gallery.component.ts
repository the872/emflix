import { Component, OnInit } from '@angular/core';

import * as movies from '../../../assets/data/movie_mocks';

@Component({
  selector: 'app-movie-gallery',
  templateUrl: './movie-gallery.component.html',
  styleUrls: ['./movie-gallery.component.scss'],
})
export class MovieGalleryComponent implements OnInit {
  movies: { cover: string; genres: string; rating: number | string; language: any }[] = [];
  movieData:
    | { cover: string | undefined; genres: string | undefined; rating: number | undefined; language: any }
    | undefined;
  ngOnInit() {
    this.movies = movies.movie_mocks.map((a) => {
      return {
        genres: a?.genres?.join()?.replace(new RegExp(',', 'g'), ' | ') || '',
        language: a?.languages[0] || '',
        rating: a?.imdb.rating || '',
        cover: a?.poster || '',
      };
    });
  }
}
