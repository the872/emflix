import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MovieGalleryModule } from '@features/movie-gallery/movie-gallery.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MovieGalleryModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
