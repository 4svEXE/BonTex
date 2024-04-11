import { IsArray, IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "src/enums/roles.enum";

export class CreateProductDto {
    
    @IsNotEmpty()
    readonly username: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    readonly password: string;
}
