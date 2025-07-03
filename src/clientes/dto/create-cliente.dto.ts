import { ApiProperty } from '@nestjs/swagger';
import { 
    IsNotEmpty, 
    IsString, 
    MaxLength,
    IsDefined,
    IsNumber,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ example: 'Joel Gutierrez Medina' })
  @IsNotEmpty({ message: 'El campo nombre Cliente no de ser vacío' })
  @IsString({ message: 'El campo nombre Cliente debe ser de tipo cadena' })
  @MaxLength(150, {
    message: 'El campo nombre Cliente no debe ser mayor a 15 caracteres',
  })
  nombreCompleto: string;

  @ApiProperty({ example: '9832712Ch' })//funcion de swagger dependencia 4
  @IsNotEmpty({ message: 'El campo carnet de Identidad no debe ser vacío' })
  @IsString({
    message: 'El campo carnet de Identidad  debe ser de tipo cadena',
  })
  @MaxLength(100, {
    message: 'El campo carnet de Identidad  no debe ser mayor a 100 caracteres',
  })
  cedula_identidad: string;

  @ApiProperty({ example: '76326723' })
  @IsDefined({ message: 'El campo número debe estar definido' })
  @IsNumber({}, { message: 'El campo número debe ser de tipo numérico' })
  readonly celular: number;
}

