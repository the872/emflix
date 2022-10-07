import { Component, OnInit } from '@angular/core';

import * as movies from '../../../assets/data/movie_mocks';

@Component({
  selector: 'app-movie-gallery',
  templateUrl: './movie-gallery.component.html',
  styleUrls: ['./movie-gallery.component.scss'],
})
export class MovieGalleryComponent implements OnInit {
  movies: (
    | { cover: string; genres: string; rating: number | string; language: any }
    | { cover: string; genres: string; rating: string; language: any }
    | {}
  )[] = [];
  movieData:
    | { cover: string | undefined; genres: string | undefined; rating: number | undefined; language: any }
    | undefined;
  ngOnInit() {
    const checkHash = window.location.search === '';
    const currentFilter = new URL(window.location.href).searchParams.get('genre');
    if (checkHash) {
      this.movies = movies.movie_mocks.map((a, index) => {
        return {
          title: a?.title,
          plot: a?.plot,
          cast: a?.cast?.join()?.replace(new RegExp(',', 'g'), ' | ') || '',
          runtime: a?.runtime,
          year: a?.year,
          genres: a?.genres?.join()?.replace(new RegExp(',', 'g'), ' | ') || '',
          language: a?.languages[0] || '',
          rating: a?.imdb.rating || '',
          cover: a?.poster || '',
          index,
        };
      });
    } else {
      if (typeof currentFilter === 'string') {
        this.movies = movies.movie_mocks
          .filter((i) => i.genres.includes(currentFilter))
          .map((a, index) => {
            return {
              title: a?.title,
              plot: a?.plot,
              cast: a?.cast?.join()?.replace(new RegExp(',', 'g'), ' | ') || '',
              runtime: a?.runtime,
              year: a?.year,
              genres: a?.genres?.join()?.replace(new RegExp(',', 'g'), ' | ') || '',
              language: a?.languages[0] || '',
              rating: a?.imdb.rating || '',
              cover: a?.poster || '',
              index,
            };
          });
      }
    }
  }
}
