import {
    Controller,
    Post,
    Body,
    UnauthorizedException,
    UseGuards,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto,RegisterAdminDto,RegisterUserDto } from 'src/dto/users.dto';
import { AdminAuthGuard } from 'src/helper/guards/admin-auth.guard';


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin-register')
  async registerAdmin(@Body() body: RegisterAdminDto) {
    const { email, password, specialIdentification } = body;
    return this.authService.registerAdmin(
      email,
      password,
      specialIdentification,
    );
  }

  @UseGuards(AdminAuthGuard)
  @ApiBearerAuth()
  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    const { email, password, specialIdentification } = body;
    return this.authService.registerUser(
      email,
      password,
      specialIdentification,
    );
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { emailOrId, password } = body;
    try {
      const { token, user } = await this.authService.validateUser(
        emailOrId,
        password,
      );
      return { access_token: token, isAdmin: user.isAdmin };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
