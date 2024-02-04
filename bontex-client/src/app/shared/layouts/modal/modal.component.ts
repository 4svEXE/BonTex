import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  imgPath: string = 'assets/img/shared/modal/';

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }
}
