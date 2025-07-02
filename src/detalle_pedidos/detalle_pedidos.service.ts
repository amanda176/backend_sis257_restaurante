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
      idPedido: createDetallePedidoDto.idPedido,
      idPlatillo: createDetallePedidoDto.idPlatillo,
    });

    if (existeDetallePedido) {
      throw new ConflictException(
        `La Detalle del pedido ${createDetallePedidoDto.idPlatillo} ya existe.`,
      );
    }

    return this.DetallePedidoRepository.save({
      idPlatillo: createDetallePedidoDto.idPlatillo,
      idPedido: createDetallePedidoDto.idPedido,
      cantidad: createDetallePedidoDto.cantidad,
      precio_unitario: createDetallePedidoDto.precio_unitario,
      subtotal: createDetallePedidoDto.subtotal,
    });
  }

  async findAll(): Promise<DetallePedido[]> {
    return this.DetallePedidoRepository.find({});
  }

  async findOne(id: number): Promise<DetallePedido> {
    const DetallePedidos = await this.DetallePedidoRepository.findOne({
      where: { id },
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
