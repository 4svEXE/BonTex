import { Component, Input, SimpleChanges } from '@angular/core';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { User } from './../../services/authentication.service';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-editor',
  templateUrl: './password-editor.component.html',
  styleUrls: ['./password-editor.component.scss'],
})
export class PasswordEditorComponent {
  @Input() user: User | undefined;
  safeSvgCodes: { [key: string]: SafeHtml } = {};
  passwordForm!: FormGroup;
  showPassword = true;

  constructor(
    private userProfile: UserProfileService,
    private svgService: SvgService,
    private fb: FormBuilder,
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('user' in changes && changes['user'].currentValue) {
      this.passwordForm.setValue({
        password: this.user?.password,
      });
    }
  }

  setCurrentView(view: string) {
    this.userProfile.updateView(view);
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Форма відправлена:', this.passwordForm.value);
    } else {
      console.log('Форма невірна, перевірте поля.');
    }
  }
}
