import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePedido } from './entities/detalle_pedido.entity';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { Platillo } from 'src/platillos/entities/platillo.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';

@Injectable()
export class DetallePedidosService {
  constructor(
    @InjectRepository(DetallePedido)
    private readonly DetallePedidoRepository: Repository<DetallePedido>,
  ) {}

  async create(createDetallePedidoDto: CreateDetallePedidoDto) {
    const existeDetallePedido = await this.DetallePedidoRepository.findOneBy({
      cantidad: createDetallePedidoDto.cantidad,
      precio_unitario: createDetallePedidoDto.precio_unitario,
      subtotal: createDetallePedidoDto.subtotal,
      pedidos: { id: createDetallePedidoDto.idPedido },
      platillos: { id: createDetallePedidoDto.idPlatillo },
    });

    if (existeDetallePedido) {
      throw new ConflictException(
        `Detalle del pedido ${createDetallePedidoDto.cantidad} ya existe.`,
      );
    }

    return this.DetallePedidoRepository.save({
      cantidad: createDetallePedidoDto.cantidad,
      precio_unitario: createDetallePedidoDto.precio_unitario,
      subtotal: createDetallePedidoDto.subtotal,
      pedidos: { id: createDetallePedidoDto.idPedido },
      platillos: { id: createDetallePedidoDto.idPlatillo },
    });
  }

  async findAll(): Promise<DetallePedido[]> {
    return this.DetallePedidoRepository.find({
      relations: {
        pedidos: true,
        platillos: true,
      },
    });
  }

  async findOne(id: number): Promise<DetallePedido> {
    const DetallePedidos = await this.DetallePedidoRepository.findOne({
      where: { id },
      relations: {
        pedidos: true,
        platillos: true,
      },
    });
    if (!DetallePedidos) {
      throw new NotFoundException(`El DetallePedido no existe ${id}`);
    }
    return DetallePedidos;
  }
  async update(
    id: number,
    updateDetallePedidoDto: UpdateDetallePedidoDto,
  ): Promise<DetallePedido> {
    const DetallePedido = await this.DetallePedidoRepository.findOneBy({
      id,
    });
    if (!DetallePedido) {
      throw new NotFoundException(`El DetallePedido no existe ${id}`);
    }
    const DetallePedidoUpdate = Object.assign(
      DetallePedido,
      updateDetallePedidoDto,
    );
    DetallePedidoUpdate.pedidos = {
      id: updateDetallePedidoDto.idPedido,
    } as Pedido;
    DetallePedidoUpdate.platillos = {
      id: updateDetallePedidoDto.idPlatillo,
    } as Platillo;
    return this.DetallePedidoRepository.save(DetallePedidoUpdate);
  }

  async remove(id: number) {
    const DetallePedido = await this.DetallePedidoRepository.findOneBy({
      id,
    });

    if (!DetallePedido) {
      throw new NotFoundException(`El DetallePedido ${id} no existe.`);
    }

    return this.DetallePedidoRepository.delete(id);
  }
}
