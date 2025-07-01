import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const existeCliente = await this.clienteRepository.findOneBy({
      nombreCompleto: createClienteDto. nombreCompleto.trim(),
      cedula_identidad: createClienteDto.cedula_identidad,
      celular: createClienteDto.celular,
    });

    if (existeCliente) {
      throw new ConflictException(
        `El cliente ${createClienteDto.nombreCompleto} ya existe.`,
      );
    }

    return this.clienteRepository.save({
      nombreCompleto: createClienteDto.nombreCompleto.trim(),
      cedula_identidad: createClienteDto.cedula_identidad,
      celular: createClienteDto.celular,
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({
    });
  }

  async findOne(id: number): Promise<Cliente> {
    const Clientes = await this.clienteRepository.findOne({
      where: { id },
    });
    if (!Clientes) {
      throw new NotFoundException(`El Cliente no existe ${id}`);
    }
    return Clientes;
  }
  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`El Cliente no existe ${id}`);
    }
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    return this.clienteRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const cliente = await this.clienteRepository.findOneBy({ id });

    if (!cliente) {
      throw new NotFoundException(`El cliente ${id} no existe.`);
    }

    return this.clienteRepository.delete(id);
  }
}
