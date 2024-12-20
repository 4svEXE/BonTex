import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeSvg } from 'src/app/core/interfaces';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { catchError, switchMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.styles.scss'],
})
export class RegisterComponent {
  title = 'register';
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  errorMessages = CustomErrorMessages;

  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(28),
    ]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService,
    private toastService: ToastService
  ) {}

  onSubmit() {
    if (!this.formGroup.valid) return;

    this.authService
      .registerAndLogin(this.formGroup.value)
      .pipe(
        switchMap(() => this.authService.getUserId()),
        catchError((error) => {
          console.error('22 connection error', error);
          this.toastService.show('error', 'Error', error.error.message);
          throw error;
        })
      )
      .subscribe((userId) => {
        this.router.navigate(['user/private-dates']);
      });
  }
}
