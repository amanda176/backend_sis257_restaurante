import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  MaxLength,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDireccionDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo Cliente debe estar definido' })
  @IsNumber({}, { message: 'El campo Cliente debe ser de tipo numérico' })
  readonly idCliente: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Direccion  no de ser vacío' })
  @IsString({ message: 'El campo Direccion debe ser de tipo cadena' })
  @MaxLength(200, {
    message: 'El campo Direccion no debe ser mayor a 200 caracteres',
  })
  direccion: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El campo piso debe ser de tipo cadena' })
  @MaxLength(10, {
    message: 'El campo piso no debe ser mayor a 10 caracteres',
  })
  piso: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'El campo indicaciones debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'El campo indicaciones no debe ser mayor a 250 caracteres',
  })
  indicaciones: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo estado  no de ser vacío' })
  @IsString({ message: 'El campo estado debe ser de tipo cadena' })
  @MaxLength(20, {
    message: 'El campo estado no debe ser mayor a 20 caracteres',
  })
  estado: string;
}
