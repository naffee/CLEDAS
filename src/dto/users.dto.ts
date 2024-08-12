import {
    IsArray,
    IsDate,
    IsEmail,
    IsJSON,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUrl,
    Length,
    ValidateNested
  } from 'class-validator';
  import {Type} from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger';
import { ArrestingStationDto } from './arrestingstation.dto';
import { FingerPrintDto } from './fingerprint.dto';
import { KnownAssociatesDto } from './knownassociates.dto';

export class RegisterAdminDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(8)
    password: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    specialIdentification?: string;
}

export class RegisterUserDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(8)
    password: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    specialIdentification?: string;
}

export class LoginDto {
    @ApiProperty({
      example: 'user@example.com',
      description: 'Email address or ID',
    })
    @IsString()
    @IsNotEmpty()
    emailOrId: string;
  
    @ApiProperty({
      example: 'password123',
      description: 'User password',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class SuspectProfileDto{
  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  middlename:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  lastname:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  alias:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  phonenumber:string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  //@IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  suspectstatus:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  nationality:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  stateOfOrigin: string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  lga:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  religion:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  sex:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  height:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  weight:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  eyecolour:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  bvn:string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  nin: string;

  @ApiProperty()
  @IsString()
  //@IsNotEmpty()
  driversLicenseNumber: string;

  @ApiProperty()
  @IsArray()
  @Type(() => KnownAssociatesDto)
  @IsOptional()
  knownassociates: KnownAssociatesDto[];

  @ApiProperty()
  @IsArray()
  @Type(() => FingerPrintDto)
  @IsOptional()
  fingerprint: FingerPrintDto[];

  @ApiProperty()
  @Type(() => ArrestingStationDto)
  @IsOptional()
  arrestingstation: ArrestingStationDto;





}

export class UpdateSuspectProfileDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  middlename:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastname:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  alias:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phonenumber:string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  suspectstatus:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nationality:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateOfOrigin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lga:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  religion:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sex:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  height:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  weight:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  eyecolour:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  bvn:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  driversLicenseNumber: string;

  @ApiProperty()
  @IsArray()
  @Type(() => KnownAssociatesDto)
  @IsOptional()
  knownassociates: KnownAssociatesDto[];

  @ApiProperty()
  @IsArray()
  @Type(() => FingerPrintDto)
  @IsOptional()
  fingerprint: FingerPrintDto[];

  @ApiProperty()
  @Type(() => ArrestingStationDto)
  @IsOptional()
  arrestingstation: ArrestingStationDto;


}

export class SendOtpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  officialEmail: string;

  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  @IsString()
  otp: string;
}

export class ResendOtpDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  officialEmail: string;
}