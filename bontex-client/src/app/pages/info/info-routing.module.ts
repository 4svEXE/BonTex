import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InfoComponent,
  },
];

@NgModule({
  declarations: [InfoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
