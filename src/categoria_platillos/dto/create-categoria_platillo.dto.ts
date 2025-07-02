import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCategoriaPlatilloDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre  no de ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo nombre no debe ser mayor a 150 caracteres',
  })
  nombre: string;

  @ApiProperty() //funcion de swagger dependencia 4
  @IsNotEmpty({ message: 'El campo descripción no debe ser vacío' })
  @IsString({
    message: 'El campo descripción debe ser de tipo cadena',
  })
  @MaxLength(100, {
    message: 'El campo descripción  no debe ser mayor a 150 caracteres',
  })
  descripcion: string;
}
