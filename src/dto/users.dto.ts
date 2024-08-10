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
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
}

export class ArrestingStationDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameOfStation:string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  arrestingOfficers:[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stationHead: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeDivision:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeCommand:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeZone:string;
}

export class KnownAssociatesDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  knownAssociates:string
}

export class FingerPrintDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fingerPrint:string
  
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
}

export class UpdateArrestingStationDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameOfStation:string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  arrestingOfficers:[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stationHead: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeDivision:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeCommand:string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  policeZone:string;
}

export class UpdateKnownAssociatesDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  knownAssociates:string;
}

export class UpdateFingerPrintDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fingerPrint:string;
  
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