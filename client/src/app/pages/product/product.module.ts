import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductInfoModule } from './components/product-info/product-info.module';

import { ProductComponent } from './product.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductPropertiesComponent } from './components/product-properties/product-properties.component';

const contenders = [ProductComponent, ProductGalleryComponent];

const modules = [CommonModule, CarouselModule, SharedModule, ProductInfoModule];

@NgModule({
  declarations: [
    contenders,
    ProductDetailsComponent,
    ProductPropertiesComponent,
  ],
  imports: [modules],
  exports: [modules, contenders],
})
export class ProductModule {}
