import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
ModalService;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  imgPath: string = 'assets/img/admin/register/';
  imgIconsPath: string = 'assets/img/admin/';

  constructor(private modalService: ModalService) {}

  updateModalState(state: string) {
    console.log(state)
    this.modalService.updateState(state);
  }
}
