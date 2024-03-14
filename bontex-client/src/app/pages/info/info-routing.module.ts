import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { DeliveryAndPaymentsComponent } from './components/delivery-and-payments/delivery-and-payments.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: 'delivery-and-payments',
        component: DeliveryAndPaymentsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [InfoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
