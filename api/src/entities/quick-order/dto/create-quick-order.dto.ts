import { IsNotEmpty, IsEmail, IsOptional, IsPhoneNumber, IsString, IsDate } from 'class-validator';

export class CreateQuickOrderDto {

  @IsNotEmpty()
  @IsString()
  readonly customerName: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  readonly customerPhone: string;

  @IsNotEmpty()
  @IsEmail()
  readonly customerEmail: string;

  @IsNotEmpty()
  @IsString()
  readonly productId: string;

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;

  @IsOptional()
  @IsDate()
  readonly updatedAt?: Date;
}
