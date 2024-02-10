import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);
    
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { user };
    return {
      access_token: await this.jwtService.signAsync(payload), //generate our JWT from a subset of the user object properties, which we then return as a simple object with a single access_token property
    };
  }
}
