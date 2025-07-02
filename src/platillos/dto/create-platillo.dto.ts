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
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo carnet de Identidad no debe ser vacío' })
  @IsString({
    message: 'El campo carnet de Identidad  debe ser de tipo cadena',
  })
  @MaxLength(100, {
    message: 'El campo carnet de Identidad  no debe ser mayor a 100 caracteres',
  })
  nombre: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo precio debe estar definido' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  @Min(0)
  precio: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo stock debe estar definido' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  @Min(0)
  readonly stock: number;

  @ApiProperty()
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
