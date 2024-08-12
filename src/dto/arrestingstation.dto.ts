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