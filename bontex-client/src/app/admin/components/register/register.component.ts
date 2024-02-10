import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationForm!: FormGroup;
  imgPath: string = 'assets/img/admin/register/';
  imgIconsPath: string = 'assets/img/admin/';

  constructor(
    private authService: AuthenticationService,
    private modalService: ModalService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  updateModalState(state: string) {
    this.modalService.updateState(state);
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.authService
    .registerAndLogin(this.registrationForm.value)
    .subscribe((userId) => {
      console.log('userId', userId);
      this.updateModalState('thanks');
      this.router.navigate(['user/' + userId]);
    });
  }
}
