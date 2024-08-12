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

export class FingerPrintDto{
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fingerPrint:string
  
}