import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDetallePedidoDto {
  @ApiProperty()
    @IsDefined({ message: 'El campo Pedido debe estar definido' })
    @IsNumber({}, { message: 'El campo Pedido debe ser de tipo numérico' })
  readonly idPedido: number;

  @ApiProperty()
    @IsDefined({ message: 'El campo Platillo debe estar definido' })
    @IsNumber({}, { message: 'El campo Platillo debe ser de tipo numérico' })
  readonly idPlatillo: number;

  @ApiProperty()
    @IsDefined({ message: 'El campo Cantidad debe estar definido' })
    @IsNumber({}, { message: 'El campo Cantidad debe ser de tipo numérico' })
  cantidad: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  precio_unitario: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subtotal: number;
}
