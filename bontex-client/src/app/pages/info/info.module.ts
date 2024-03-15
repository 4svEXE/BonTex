import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';

import { DeliveryAndPaymentsComponent } from './components/delivery-and-payments/delivery-and-payments.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DeliveryAndPaymentsComponent
  ],
  imports: [ CommonModule, InfoRoutingModule],
})
export class InfoModule { }
