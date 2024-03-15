import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';

import { DeliveryAndPaymentsComponent } from './components/delivery-and-payments/delivery-and-payments.component';

import { ExchangeAndReturnsComponent } from './components/exchange-and-returns/exchange-and-returns.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserAgreementComponent } from './components/user-agreement/user-agreement.component';
import { FaqComponent } from './components/faq/faq.component';
import { StoreReviewsComponent } from './components/store-reviews/store-reviews.component';
import { CatalogInfoComponent } from './components/catalog-info/catalog-info.component';


@NgModule({
  declarations: [
    DeliveryAndPaymentsComponent,
    ExchangeAndReturnsComponent,
    AboutUsComponent,
    ContactsComponent,
    UserAgreementComponent,
    FaqComponent,
    StoreReviewsComponent,
    CatalogInfoComponent,
  ],
  imports: [ CommonModule, InfoRoutingModule],
})
export class InfoModule { }
