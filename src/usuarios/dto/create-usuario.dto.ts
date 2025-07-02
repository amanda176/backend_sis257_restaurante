import { IsNotEmpty, IsString, IsIn, MaxLength, IsDefined, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo  usuario  no de ser vacío' })
  @IsString({ message: 'El campo  usuario debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo  usuario no debe ser mayor a 150 caracteres',
  })
  usuario_login: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo clave  no de ser vacío' })
  @IsString({ message: 'El campo vclave debe ser de tipo cadena' })
  @MaxLength(150, {
    message: 'El campo clave no debe ser mayor a 150 caracteres',
  })
  clave: string;

  @ApiProperty({ example: 'El rol debe ser administrador, cajero o repartidor '})
  @IsNotEmpty({ message: 'El campo  rol  no de ser vacío' })
  @IsString({ message: 'El campo  rol debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo  rol no debe ser mayor a 150 caracteres',
  })
  @IsIn(['administrador', 'cajero', 'repartidor'])
  rol: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo Empleado debe estar definido' })
  @IsNumber({}, { message: 'El campo Empleado debe ser de tipo numérico' })
  readonly idEmpleado: number;
}
