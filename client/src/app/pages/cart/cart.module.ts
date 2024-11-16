import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CartRoutingModule } from './cart-routing.module';

import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';



const contenders = [CartComponent];

const modules = [
  CommonModule,
  CartRoutingModule,
  SharedModule,
  NgxSmartModalModule.forRoot(),
];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class CartModule { }
