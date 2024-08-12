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

export class KnownAssociatesDto{
  @ApiProperty({
    type: 'array',
    items: { type: 'string', },
  })
  @IsNotEmpty()
  knownAssociates?:any[]
}