import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';

@Component({
  selector: 'app-product-add-review',
  templateUrl: './product-add-review.component.html',
  styleUrls: ['./product-add-review.component.scss']
})
export class ProductAddReviewComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  errorMessages = CustomErrorMessages;

  rating = 5;


  // Якщо юзер залогінений то підтягувати ім1я і емайл,
  // а якщо ні то відкривати модалку регістрації

  formGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(28),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(32),
    ]),
    review: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]),
  });

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    // private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService
  ) {}

  onSubmit() {
    if (!this.formGroup.valid) return;

    console.log(this.formGroup.value);


    // const loginForm: LoginForm ={
    //   email: this.formGroup.get('email')?.value || '',
    //   password: this.formGroup.get('password')?.value || '',
    // };

    // // this.authService;
    // this.authService
    //   .login(loginForm)
    //   .pipe(switchMap(() => this.authService.getUserId()))
    //   .subscribe((userId) => {
    //     // console.log('userId', userId);
    //     this.router.navigate(['user']);
    //     this.ngxSmartModalService.getModal('popupModal').close()
    //   });
  }
}
