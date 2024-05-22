import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeSvg } from 'src/app/core/interfaces';
import { QuickOrdertService } from 'src/app/core/services/quick-order.service';
import { SvgService } from 'src/app/core/services/svg.service';
import { CustomErrorMessages } from 'src/app/core/variables/customFormsErrors';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.scss'],
})
export class QuickOrderComponent {
  @Input() productId!: string;
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  errorMessages = CustomErrorMessages;
  modalMsg = {
    title: 'Замовлення id:',
    text: 'Ми отримали Ваше замовлення. Наш менеджер зв’яжеться з Вами з 9:00 до 17:00.',
  };

  formGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(28),
    ]),
    phoneNumber: new FormControl('', [
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
  });

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private quickOrderService: QuickOrdertService,
    private svgService: SvgService
  ) {}

  onSubmit() {
    if (!this.formGroup.valid) return;

    const customerName = this.formGroup.get('username')!.value as string;
    const customerPhone = this.formGroup.get('phoneNumber')!.value as string;
    const customerEmail = this.formGroup.get('email')!.value as string;
    const productId = this.productId as string;

    this.ngxSmartModalService.close('quickOrder');

    this.quickOrderService
      .create({
        customerName,
        customerPhone,
        customerEmail,
        productId,
      })
      .subscribe({
        next: (response) => {
          this.modalMsg.title = `Замовлення id: ${response._id}`;
          this.ngxSmartModalService.setModalData(this.modalMsg, 'notificationModal');
          this.ngxSmartModalService.open('notificationModal');
        },
        error: (err) => {
          // Обробка помилки
          this.modalMsg = {
            title: 'Ой :( Сталася помилка.',
            text: 'Замовлення не було відправлено. Спробуйте пізніше.',
          };
          this.ngxSmartModalService.setModalData(this.modalMsg, 'notificationModal');
          this.ngxSmartModalService.open('notificationModal');
        },
      });
  }
}
