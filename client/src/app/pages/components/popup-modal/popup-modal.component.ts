import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';

import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  modalState: string = '';
  private stateSubscription!: Subscription;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private svgService: SvgService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.stateSubscription = this.modalService.state$.subscribe((newState) => {
      this.modalState = newState;
    });
  }

  updateData(): void {
    this.modalService.updateState(this.modalState);
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }
}
