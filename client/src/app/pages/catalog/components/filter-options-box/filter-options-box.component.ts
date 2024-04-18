import { Component, Input } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-filter-options-box',
  templateUrl: './filter-options-box.component.html',
  styleUrls: ['./filter-options-box.component.scss'],
})
export class FilterOptionsBoxComponent {
  @Input() label!: string;
  @Input() options: { label: string; count: number; isChecked: boolean }[] = [];

  // TODO винести опцію в інтерфейс
  isShowOptions: boolean = false;

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(private svgService: SvgService) {}

  toggleShowOptions() {
    this.isShowOptions =!this.isShowOptions;
  }
}
