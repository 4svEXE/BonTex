import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateReviewDto {
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly productId: string;

  @IsNotEmpty()
  readonly review: string;

  @IsNotEmpty()
  readonly rating: number;
}
