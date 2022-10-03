import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGalleryComponent } from './movie-gallery.component';
import { MovieCardModule } from '@core/components/movie-card/movie-card.module';

@NgModule({
  declarations: [MovieGalleryComponent],
  imports: [CommonModule, MovieCardModule],
  exports: [MovieGalleryComponent],
})
export class MovieGalleryModule {}
