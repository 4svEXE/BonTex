import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../services/authentication.service';
import { UserService } from '../../shared/services/user.service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-dates-editor',
  templateUrl: './private-dates-editor.component.html',
  styleUrls: ['./private-dates-editor.component.scss'],
})
export class PrivateDatesEditorComponent {
  userForm!: FormGroup;
  private sub!: Subscription;
  user!: User;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(8)],
      ],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Форма відправлена:', this.userForm.value);
    } else {
      console.log('Форма невірна, перевірте поля.');
    }
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService
        .findOne(this.userId)
        .pipe(map((user: User) => (this.user = user)))
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
