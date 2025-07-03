import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Use23d' })
  @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
  @IsString({ message: 'El campo usuario debe ser de tipo cadena' })
  @MaxLength(15, {
    message: 'El campo usuario no debe ser mayor a 15 caracteres',
  })
  readonly usuario: string;

  @ApiProperty({ example: 'user@gmail.com' })
  @IsNotEmpty({ message: 'El campo email es obligatorio' })
  @IsString({ message: 'El campo email debe ser de tipo cadena' })
  @MaxLength(70, {
    message: 'El campo email no debe ser mayor a 70 caracteres',
  })
  readonly email: string;

  @ApiProperty({ example: 'admin' })
  @IsNotEmpty({ message: 'El campo rol es obligatorio' })
  @IsString({ message: 'El campo rol debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo rol no debe ser mayor a 15 caracteres' })
  readonly rol: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo Empleado debe estar definido' })
  @IsNumber({}, { message: 'El campo Empleado debe ser de tipo numérico' })
  readonly idEmpleado: number;
}
