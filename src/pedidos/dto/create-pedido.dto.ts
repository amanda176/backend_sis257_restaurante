import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString,
  IsDefined,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha debe estar definido' })
  @IsDateString({}, { message: 'El campo fecha debe ser de tipo fecha' })
  readonly fecha: Date;

  @ApiProperty()
  @IsDefined({ message: 'El campo total debe estar definido' })
  @IsNumber({}, { message: 'El campo total debe ser de tipo numérico' })
  total: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo estado no debe ser vacío' })
  @IsString({
    message: 'El campo estado debe ser de tipo cadena',
  })
  estado: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo Cliente debe estar definido' })
  @IsNumber({}, { message: 'El campo Cliente debe ser de tipo numérico' })
  readonly idCliente: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo Direccion debe estar definido' })
  @IsNumber({}, { message: 'El campo Direccion debe ser de tipo numérico' })
  readonly idDireccion: number;
}
