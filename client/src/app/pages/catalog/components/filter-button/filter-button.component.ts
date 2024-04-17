import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  @Input() label!: string;
  @Input() isClose: boolean = false;
  @Input() additionClasses: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}

  onClose(): void {
    this.buttonClick.emit();
  }

  get classes(): string {
    return 'filter-button ' + this.additionClasses;
  }
}
