import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly EmpleadoRepository: Repository<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const existeEmpleado =
      await this.EmpleadoRepository.findOneBy({
        nombres: createEmpleadoDto.nombres.trim(),
        primer_apellido: createEmpleadoDto.primer_apellido,
        segundo_apellido: createEmpleadoDto.segundo_apellido,
        cedula_identidad: createEmpleadoDto.cedula_identidad,
        direccion: createEmpleadoDto.direccion,
        celular: createEmpleadoDto.celular,
      });

    if (existeEmpleado) {
      throw new ConflictException(
        `El empleado ${createEmpleadoDto.nombres} ya existe.`,
      );
    }

    return this.EmpleadoRepository.save({
      nombres: createEmpleadoDto.nombres.trim(),
      primer_apellido: createEmpleadoDto.primer_apellido,
      segundo_apellido: createEmpleadoDto.segundo_apellido,
      cedula_identidad: createEmpleadoDto.cedula_identidad,
      direccion: createEmpleadoDto.direccion,
      celular: createEmpleadoDto.celular,
    });
  }

  async findAll(): Promise<Empleado[]> {
    return this.EmpleadoRepository.find({});
  }

  async findOne(id: number): Promise<Empleado> {
    const Empleados = await this.EmpleadoRepository.findOne({
      where: { id },
    });
    if (!Empleados) {
      throw new NotFoundException(`El Empleado no existe ${id}`);
    }
    return Empleados;
  }
  async update(
    id: number,
    updateEmpleadoDto: UpdateEmpleadoDto,
  ): Promise<Empleado> {
    const Empleado = await this.EmpleadoRepository.findOneBy({
      id,
    });
    if (!Empleado) {
      throw new NotFoundException(`El Empleado no existe ${id}`);
    }
    const EmpleadoUpdate = Object.assign(
      Empleado,
      updateEmpleadoDto,
    );
    return this.EmpleadoRepository.save(EmpleadoUpdate);
  }

  async remove(id: number) {
    const Empleado = await this.EmpleadoRepository.findOneBy({
      id,
    });

    if (!Empleado) {
      throw new NotFoundException(`El Empleado ${id} no existe.`);
    }

    return this.EmpleadoRepository.delete(id);
  }
}
