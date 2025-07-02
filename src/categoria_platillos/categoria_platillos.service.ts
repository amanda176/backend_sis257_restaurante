import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaPlatillo } from './entities/categoria_platillo.entity';
import { Repository } from 'typeorm';
import { UpdateCategoriaPlatilloDto } from './dto/update-categoria_platillo.dto';
import { CreateCategoriaPlatilloDto } from './dto/create-categoria_platillo.dto';

@Injectable()
export class CategoriaPlatillosService {
  constructor(
    @InjectRepository(CategoriaPlatillo)
    private readonly CategoriaPlatilloRepository: Repository<CategoriaPlatillo>,
  ) {}

  async create(createCategoriaPlatilloDto: CreateCategoriaPlatilloDto) {
    const existeCategoriaPlatillo =
      await this.CategoriaPlatilloRepository.findOneBy({
        nombre: createCategoriaPlatilloDto.nombre.trim(),
        descripcion: createCategoriaPlatilloDto.descripcion,
      });

    if (existeCategoriaPlatillo) {
      throw new ConflictException(
        `La Categoria Platillo ${createCategoriaPlatilloDto.nombre} ya existe.`,
      );
    }

    return this.CategoriaPlatilloRepository.save({
      nombre: createCategoriaPlatilloDto.nombre.trim(),
      descripcion: createCategoriaPlatilloDto.descripcion,
    });
  }

  async findAll(): Promise<CategoriaPlatillo[]> {
    return this.CategoriaPlatilloRepository.find({});
  }

  async findOne(id: number): Promise<CategoriaPlatillo> {
    const CategoriaPlatillos = await this.CategoriaPlatilloRepository.findOne({
      where: { id },
    });
    if (!CategoriaPlatillos) {
      throw new NotFoundException(`El CategoriaPlatillo no existe ${id}`);
    }
    return CategoriaPlatillos;
  }
  async update(
    id: number,
    updateCategoriaPlatilloDto: UpdateCategoriaPlatilloDto,
  ): Promise<CategoriaPlatillo> {
    const CategoriaPlatillo = await this.CategoriaPlatilloRepository.findOneBy({
      id,
    });
    if (!CategoriaPlatillo) {
      throw new NotFoundException(`El CategoriaPlatillo no existe ${id}`);
    }
    const CategoriaPlatilloUpdate = Object.assign(
      CategoriaPlatillo,
      updateCategoriaPlatilloDto,
    );
    return this.CategoriaPlatilloRepository.save(CategoriaPlatilloUpdate);
  }

  async remove(id: number) {
    const CategoriaPlatillo = await this.CategoriaPlatilloRepository.findOneBy({
      id,
    });

    if (!CategoriaPlatillo) {
      throw new NotFoundException(`El CategoriaPlatillo ${id} no existe.`);
    }

    return this.CategoriaPlatilloRepository.delete(id);
  }
}
