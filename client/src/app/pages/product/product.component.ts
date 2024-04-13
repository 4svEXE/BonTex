import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private sub!: Subscription;
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];

      this.getProduct(productId);
    });
  }

  getProduct(id: string) {
    this.productService.getProductById(id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Product not found');
        this.router.navigate(['/catalog']);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
