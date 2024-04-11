import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateProductDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly group?: string;

  readonly oldPrice?: number;

  @IsNotEmpty()
  readonly currentPrice: number;

  @IsNotEmpty()
  readonly category: string;

  readonly isDiscount?: boolean;

  @IsNotEmpty()
  readonly manufacturer: string;

  @IsNotEmpty()
  readonly unit_price: number;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly isAvailable: boolean;

  @IsNotEmpty()
  readonly quantity_in_stock: number;

  @IsNotEmpty()
  readonly popularity_rating: number;

  @IsNotEmpty()
  readonly features: string[];

  @IsNotEmpty()
  readonly product_image_url: string[];

  @IsNotEmpty()
  readonly sizes: { size: string; quantity_in_stock: number }[];

  readonly rug_type: string;

  readonly rug_material: string;

  readonly rug_color: string[];

  readonly rug_shape: string;

  readonly rug_country_of_origin: string;

  readonly rug_pile_height: number;

  readonly rug_backing_material: string;

  readonly rug_height: number;

  readonly rug_sku: string | number;

  readonly rug_discounted_price?: number;
}
