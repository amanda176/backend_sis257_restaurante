import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const existeUsuario = await this.UsuarioRepository.findOneBy({
      usuario_login: createUsuarioDto.usuario_login.trim(),
      clave: createUsuarioDto.clave,
      rol: createUsuarioDto.rol,
      empleados: { id: createUsuarioDto.idEmpleado },
    });

    if (existeUsuario) {
      throw new ConflictException(
        `El Usuario ${createUsuarioDto.usuario_login} ya existe.`,
      );
    }

    return this.UsuarioRepository.save({
      usuario_login: createUsuarioDto.usuario_login.trim(),
      clave: createUsuarioDto.clave,
      rol: createUsuarioDto.rol,
      empleados: { id: createUsuarioDto.idEmpleado },
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.UsuarioRepository.find({
      relations: {
        empleados: true,
      },
    });
  }

  async findOne(id: number): Promise<Usuario> {
    const Usuarios = await this.UsuarioRepository.findOne({
      where: { id },
      relations: {
        empleados: true,
      },
    });
    if (!Usuarios) {
      throw new NotFoundException(`El Usuario no existe ${id}`);
    }
    return Usuarios;
  }
  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const Usuario = await this.UsuarioRepository.findOneBy({
      id,
    });
    if (!Usuario) {
      throw new NotFoundException(`El Usuario no existe ${id}`);
    }
    const UsuarioUpdate = Object.assign(Usuario, updateUsuarioDto);
    UsuarioUpdate.empleados = { id: updateUsuarioDto.idEmpleado } as Empleado;
    return this.UsuarioRepository.save(UsuarioUpdate);
  }

  async remove(id: number) {
    const Usuario = await this.UsuarioRepository.findOneBy({
      id,
    });

    if (!Usuario) {
      throw new NotFoundException(`El Usuario ${id} no existe.`);
    }

    return this.UsuarioRepository.delete(id);
  }
}
