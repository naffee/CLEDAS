import {
    Injectable,
    BadRequestException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { User } from '../database/entities/user.entity';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  
  @Injectable()
  export class AuthService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      private jwtService: JwtService,
    ) {}
  
    async registerAdmin(
      email: string,
      password: string,
      specialIdentification?: string,
    ): Promise<User> {
      const existingUser = await this.userRepository.findOne({
        where: [{ email }, { specialIdentification }],
      });
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }
      const user = this.userRepository.create({
        email,
        password,
        specialIdentification,
        isAdmin: true,
      });
      return this.userRepository.save(user);
    }
  
    async registerUser(
      email: string,
      password: string,
      specialIdentification: string,
    ): Promise<User> {
      const existingUser = await this.userRepository.findOne({
        where: [{ email }, { specialIdentification }],
      });
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }
      const user = this.userRepository.create({
        email,
        password,
        specialIdentification,
        isAdmin: false,
      });
      return this.userRepository.save(user);
    }
  
    async validateUser(
      emailOrId: string,
      pass: string,
    ): Promise<{ token: string; user: User }> {
      const user = await this.userRepository.findOne({
        where: [{ email: emailOrId }, { specialIdentification: emailOrId }],
      });
      if (user && (await bcrypt.compare(pass, user.password))) {
        const payload = {
          specialIdentification: user.specialIdentification,
          email: user.email,
          id: user.id,
          isAdmin: user.isAdmin,
        };
        const token = this.jwtService.sign(payload);
        return { token, user };
      }
      throw new UnauthorizedException('Invalid credentials');
    }
  }
  