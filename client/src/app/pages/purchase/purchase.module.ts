import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { SharedModule } from 'src/app/shared/shared.module';
import { QuickOrderComponent } from './quick-order/quick-order.component';
import { OrderComponent } from './order/order.component';

const contenders = [OrderComponent, QuickOrderComponent];

const modules = [
  CommonModule,
  PurchaseRoutingModule,
  SharedModule,
  NgxSmartModalModule.forRoot(),
];

@NgModule({
  declarations: [contenders],
  imports: [modules],
  exports: [modules, contenders],
})
export class PurchaseModule {}
