import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map, switchMap } from 'rxjs';

ModalService;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  imgPath: string = 'assets/img/admin/register/';
  imgIconsPath: string = 'assets/img/admin/';

  constructor(
    private authService: AuthenticationService,
    private modalService: ModalService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
    .login(this.loginForm.value)
    .pipe(switchMap(() => this.authService.getUserId()))
    .subscribe((userId) => {
      console.log('userId', userId);
      this.router.navigate(['user/' + userId]);
    });
  }

  updateModalState(state: string) {
    this.modalService.updateState(state);
  }

}
