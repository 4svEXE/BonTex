import { Component, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
})
export class NotificationModalComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() hideDelay = 5000;

  isPausedAutoclose = false;

  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private svgService: SvgService
  ) {}

  onOpenModal() {
    this.setModalAutocloseTimeout();
  }

  timeout = setTimeout(() => {}, 0);
  setModalAutocloseTimeout() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (!this.isPausedAutoclose) {
        this.ngxSmartModalService.close('notificationModal');
      }
    }, this.hideDelay);
  }

  onMouseEnter() {
    this.isPausedAutoclose = true;
  }

  onMouseLeave() {
    this.isPausedAutoclose = false;
    this.setModalAutocloseTimeout();
  }
}
