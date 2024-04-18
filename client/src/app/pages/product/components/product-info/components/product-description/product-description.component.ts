import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['../../product-info.component.scss']
})
export class ProductDescriptionComponent {
  @Input() description!: string;
}
