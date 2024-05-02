import { Component } from '@angular/core';
import { Product, SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-selected-goods',
  templateUrl: './selected-goods.component.html',
  styleUrls: ['./selected-goods.component.scss', '../../user-profile.component.scss']
})
export class SelectedGoodsComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  products: Product[] = [];

  constructor(private svgService: SvgService) {}
}
