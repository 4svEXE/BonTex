import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ProductComponent } from './product.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// ! TODO винести фільтри в окремий модуль
const contenders = [ProductComponent ,ProductGalleryComponent];

const modules = [CommonModule ,CarouselModule];

@NgModule({
  declarations: [contenders, ProductDetailsComponent],
  imports: [modules],
  exports: [modules, contenders],
})
export class ProductModule {}
