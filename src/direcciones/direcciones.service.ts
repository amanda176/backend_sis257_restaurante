import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { Direccion } from './entities/direccion.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class DireccionesService {
  constructor(
    @InjectRepository(Direccion)
    private readonly DireccionRepository: Repository<Direccion>,
  ) {}

  async create(createDireccionDto: CreateDireccionDto) {
    const existeDireccion = await this.DireccionRepository.findOneBy({
      direccion: createDireccionDto.direccion.trim(),
      piso: createDireccionDto.piso,
      indicaciones: createDireccionDto.indicaciones,
      estado: createDireccionDto.estado,
      clientes: { id: createDireccionDto.idCliente },
    });

    if (existeDireccion) {
      throw new ConflictException(
        `La Direccion ${createDireccionDto.direccion} ya existe.`,
      );
    }

    return this.DireccionRepository.save({
      direccion: createDireccionDto.direccion.trim(),
      piso: createDireccionDto.piso,
      indicaciones: createDireccionDto.indicaciones,
      estado: createDireccionDto.estado,
      clientes: { id: createDireccionDto.idCliente },
    });
  }

  async findAll(): Promise<Direccion[]> {
    return this.DireccionRepository.find({
      relations: {
        clientes: true,
      },
    });
  }

  async findOne(id: number): Promise<Direccion> {
    const Direccions = await this.DireccionRepository.findOne({
      where: { id },
      relations: {
        clientes: true,
      },
    });
    if (!Direccions) {
      throw new NotFoundException(`La Direccion no existe ${id}`);
    }
    return Direccions;
  }
  async update(
    id: number,
    updateDireccionDto: UpdateDireccionDto,
  ): Promise<Direccion> {
    const Direccion = await this.DireccionRepository.findOneBy({
      id,
    });
    if (!Direccion) {
      throw new NotFoundException(`La Direccion no existe ${id}`);
    }
    const DireccionUpdate = Object.assign(Direccion, updateDireccionDto);
    DireccionUpdate.clientes = {
      id: updateDireccionDto.idCliente,
    } as Cliente;
    return this.DireccionRepository.save(DireccionUpdate);
  }

  async remove(id: number) {
    const Direccion = await this.DireccionRepository.findOneBy({
      id,
    });

    if (!Direccion) {
      throw new NotFoundException(`La Direccion ${id} no existe.`);
    }

    return this.DireccionRepository.delete(id);
  }
}
