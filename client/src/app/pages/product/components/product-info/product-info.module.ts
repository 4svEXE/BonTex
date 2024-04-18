import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './product-info.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductPaymentComponent } from './components/product-payment/product-payment.component';
import { ProductReturnComponent } from './components/product-return/product-return.component';
import { ProductDeliveryComponent } from './components/product-delivery/product-delivery.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductInfoPagesComponent } from './components/product-info-pages/product-info-pages.component';


const contenders = [
  ProductInfoComponent,
  ProductDescriptionComponent,
  ProductPaymentComponent,
  ProductReturnComponent,
  ProductDeliveryComponent,
  ProductReviewsComponent,
];

const modules = [CommonModule, SharedModule, NgxPaginationModule];

@NgModule({
  declarations: [contenders, ProductInfoPagesComponent],
  imports: [modules],
  exports: [modules, contenders],
})
export class ProductInfoModule {}
