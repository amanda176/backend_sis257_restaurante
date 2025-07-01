import { Test, TestingModule } from '@nestjs/testing';
import { DetallePedidosController } from './detalle_pedidos.controller';
import { DetallePedidosService } from './detalle_pedidos.service';

describe('DetallePedidosController', () => {
  let controller: DetallePedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallePedidosController],
      providers: [DetallePedidosService],
    }).compile();

    controller = module.get<DetallePedidosController>(DetallePedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
