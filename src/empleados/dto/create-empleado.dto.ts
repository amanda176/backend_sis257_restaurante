import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpleadoDto {
  @ApiProperty({ example: 'Amanda' })
  @IsNotEmpty({ message: 'El campo nombre no de ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo nombre no debe ser mayor a 15 caracteres',
  })
  nombres: string;

  @ApiProperty({ example: 'Serrudo' })
  @IsNotEmpty({ message: 'El campo Primer Apellido no de ser vacío' })
  @IsString({ message: 'El campo Primer Apellido debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo Primer Apellido no debe ser mayor a 15 caracteres',
  })
  primer_apellido: string;

  @ApiProperty({ example: 'Salazar' })
  @IsNotEmpty({ message: 'El campo Segundo Apellido no de ser vacío' })
  @IsString({ message: 'El campo Segundo Apellido debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo Segundo Apellido no debe ser mayor a 15 caracteres',
  })
  segundo_apellido: string;

  @ApiProperty({ example: '10402323Ch' })
  @IsNotEmpty({ message: 'El campo CI no de ser vacío' })
  @IsString({ message: 'El campo CI debe ser de tipo cadena' })
  @MaxLength(20, {
    message: 'El campo CI no debe ser mayor a 15 caracteres',
  })
  cedula_identidad: string;

  @ApiProperty({ example: 'Junin #34' })
  @IsNotEmpty({ message: 'El campo Direccion no de ser vacío' })
  @IsString({ message: 'El campo Direccion debe ser de tipo cadena' })
  @MaxLength(200, {
    message: 'El campo Direccion no debe ser mayor a 15 caracteres',
  })
  direccion: string;

  @ApiProperty({ example: '68632378' })
  @IsDefined({ message: 'El campo número debe estar definido' })
  @IsNumber({}, { message: 'El campo número debe ser de tipo numérico' })
  readonly celular: number;
}
