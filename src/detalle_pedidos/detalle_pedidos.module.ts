import { Module } from '@nestjs/common';
import { DetallePedidosService } from './detalle_pedidos.service';
import { DetallePedidosController } from './detalle_pedidos.controller';
import { DetallePedido } from './entities/detalle_pedido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido])],
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService],
})
export class DetallePedidosModule {}
