import { IsArray, IsEmail, IsNotEmpty } from "class-validator";
import { Roles } from "src/enums/roles.enum";

export class CreateUserDto {
    
    @IsNotEmpty()
    readonly username: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    readonly password: string;

    @IsArray()
    readonly roles: Roles[];

}
