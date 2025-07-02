import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platillo } from './entities/platillo.entity';
import { CreatePlatilloDto } from './dto/create-platillo.dto';
import { UpdatePlatilloDto } from './dto/update-platillo.dto';


@Injectable()
export class PlatillosService {
  constructor(
    @InjectRepository(Platillo)
    private readonly PlatilloRepository: Repository<Platillo>,
  ) {}

  async create(createPlatilloDto: CreatePlatilloDto) {
    const existePlatillo =
      await this.PlatilloRepository.findOneBy({
        nombre: createPlatilloDto.nombre.trim(),
        precio: createPlatilloDto.precio,
        stock: createPlatilloDto.stock,
        tiempo_preparacion: createPlatilloDto.tiempo_preparacion,
        idCategoriaPlatillo: createPlatilloDto.idCategoriaPlatillo,

      });

    if (existePlatillo) {
      throw new ConflictException(
        `El platillo ${createPlatilloDto.nombre} ya existe.`,
      );
    }

    return this.PlatilloRepository.save({
      nombre: createPlatilloDto.nombre.trim(),
      precio: createPlatilloDto.precio,
      stock: createPlatilloDto.stock,
      tiempo_preparacion: createPlatilloDto.tiempo_preparacion,   
      idCategoriaPlatillo: createPlatilloDto.idCategoriaPlatillo,    
    });
  }

  async findAll(): Promise<Platillo[]> {
    return this.PlatilloRepository.find({});
  }

  async findOne(id: number): Promise<Platillo> {
    const Platillos = await this.PlatilloRepository.findOne({
      where: { id },
    });
    if (!Platillos) {
      throw new NotFoundException(`El Platillo no existe ${id}`);
    }
    return Platillos;
  }
  async update(
    id: number,
    updatePlatilloDto: UpdatePlatilloDto,
  ): Promise<Platillo> {
    const Platillo = await this.PlatilloRepository.findOneBy({
      id,
    });
    if (!Platillo) {
      throw new NotFoundException(`El Platillo no existe ${id}`);
    }
    const PlatilloUpdate = Object.assign(
      Platillo,
      updatePlatilloDto,
    );
    return this.PlatilloRepository.save(PlatilloUpdate);
  }

  async remove(id: number) {
    const Platillo = await this.PlatilloRepository.findOneBy({
      id,
    });

    if (!Platillo) {
      throw new NotFoundException(`El Platillo ${id} no existe.`);
    }

    return this.PlatilloRepository.delete(id);
  }
}
