import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SharedModule } from 'primeng/api';
import { AddReviewComponent } from './add-review/add-review.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { AuthModule } from '../auth/auth.module';

// ! TODO винести фільтри в окремий модуль
const contenders = [AddReviewComponent, PopupModalComponent];

const modules = [SharedModule, NgxPaginationModule, AuthModule];

@NgModule({
  declarations: [contenders],
  imports: [modules, NgxSmartModalModule.forRoot()],
  exports: [modules, contenders],
})
export class PagesComponentsModule {}
