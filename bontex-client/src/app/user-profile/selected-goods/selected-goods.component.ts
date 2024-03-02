
import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-selected-goods',
  templateUrl: './selected-goods.component.html',
  styleUrls: ['./selected-goods.component.scss']
})
export class SelectedGoodsComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }
}
