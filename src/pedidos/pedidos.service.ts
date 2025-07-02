import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly PedidoRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const existePedido = await this.PedidoRepository.findOneBy({
      estado: createPedidoDto.estado.trim(),
      fecha: createPedidoDto.fecha,
      total: createPedidoDto.total,
      idCliente: createPedidoDto.idCliente,
      idDireccion: createPedidoDto.idDireccion,
    });

    if (existePedido) {
      throw new ConflictException(
        `El pedido del ${createPedidoDto.idCliente} ya existe.`,
      );
    }

    return this.PedidoRepository.save({
      estado: createPedidoDto.estado.trim(),
      fecha: createPedidoDto.fecha,
      total: createPedidoDto.total,
      idCliente: createPedidoDto.idCliente,
      idDireccion: createPedidoDto.idDireccion,
    });
  }

  async findAll(): Promise<Pedido[]> {
    return this.PedidoRepository.find({});
  }

  async findOne(id: number): Promise<Pedido> {
    const Pedidos = await this.PedidoRepository.findOne({
      where: { id },
    });
    if (!Pedidos) {
      throw new NotFoundException(`El Pedido no existe ${id}`);
    }
    return Pedidos;
  }
  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const Pedido = await this.PedidoRepository.findOneBy({
      id,
    });
    if (!Pedido) {
      throw new NotFoundException(`El Pedido no existe ${id}`);
    }
    const PedidoUpdate = Object.assign(Pedido, updatePedidoDto);
    return this.PedidoRepository.save(PedidoUpdate);
  }

  async remove(id: number) {
    const Pedido = await this.PedidoRepository.findOneBy({
      id,
    });

    if (!Pedido) {
      throw new NotFoundException(`El Pedido ${id} no existe.`);
    }

    return this.PedidoRepository.delete(id);
  }
}
