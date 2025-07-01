import { Module } from '@nestjs/common';
import { DetallePedidosService } from './detalle_pedidos.service';
import { DetallePedidosController } from './detalle_pedidos.controller';

@Module({
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService],
})
export class DetallePedidosModule {}
