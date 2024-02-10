import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() imageUrl: string | undefined;
  @Input() label: string = 'Click me';
  @Input() routerLink: string | undefined;
  @Input() additionalClasses: string = '';
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() isDisabled: boolean = false; // Added for disabled state
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  get buttonClasses(): string{
    return 'custom-button ' + this.additionalClasses;
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}
