import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlatilloDto {
  @ApiProperty({ example: 'Jhojan' })
  @IsNotEmpty({ message: 'El campo carnet de Identidad no debe ser vacío' })
  @IsString({
    message: 'El campo carnet de Identidad  debe ser de tipo cadena',
  })
  @MaxLength(100, {
    message: 'El campo carnet de Identidad  no debe ser mayor a 100 caracteres',
  })
  nombre: string;

    @ApiProperty({ example: 'https://i.pinimg.com/736x/c7/c1/24/c7c124c4f3958564b3b48dbeda4c1d43.jpg' })
  @IsNotEmpty({
    message: 'El campo urlPlatillo del producto no debe ser vacío',
  })
  @IsString({
    message: 'El campo urlPlatillo del producto debe ser de tipo cadena',
  })
  @MaxLength(250, {
    message:
      'El campo urlPlatillo del producto no debe ser mayor a 250 caracteres',
  })
  readonly urlPlatillo: string;

  @ApiProperty({ example: '15' })
  @IsDefined({ message: 'El campo precio debe estar definido' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  @Min(0)
  precio: number;

  @ApiProperty({ example: '5' })
  @IsDefined({ message: 'El campo stock debe estar definido' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  @Min(0)
  readonly stock: number;

  @ApiProperty({ example: '10 min' })
  @IsNotEmpty({ message: 'El campo carnet de Identidad no debe ser vacío' })
  @IsString({
    message: 'El campo carnet de Identidad  debe ser de tipo cadena',
  })
  @MaxLength(100, {
    message: 'El campo carnet de Identidad  no debe ser mayor a 100 caracteres',
  })
  tiempo_preparacion: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo Categoria debe estar definido' })
  @IsNumber({}, { message: 'El campo Categoria debe ser de tipo numérico' })
  readonly idCategoriaPlatillo: number;
}
