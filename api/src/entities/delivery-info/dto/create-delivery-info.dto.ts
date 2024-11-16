import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
} from "class-validator";
import { ObjectId } from "mongodb";

export class CreateDeliveryInfoDto {
  @IsNotEmpty()
  @IsString()
  readonly recipientName: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsNotEmpty()
  @IsString()
  readonly postalCode: string;

  @IsNotEmpty()
  @IsString()
  readonly phoneNumber: string;

  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsDate()
  readonly deliveryDate?: Date; 

  @IsNotEmpty()
  @IsString()
  readonly orderId: ObjectId;
}
