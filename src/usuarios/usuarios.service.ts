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

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const existeUsuario =
      await this.UsuarioRepository.findOneBy({
        usuario_login: createUsuarioDto.usuario_login.trim(),
        clave: createUsuarioDto.clave,
        rol: createUsuarioDto.rol,
        idEmpleado: createUsuarioDto.idEmpleado,
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
      idEmpleado: createUsuarioDto.idEmpleado,
    });
  }

  async findAll(): Promise<Usuario[]> {
    return this.UsuarioRepository.find({});
  }

  async findOne(id: number): Promise<Usuario> {
    const Usuarios = await this.UsuarioRepository.findOne({
      where: { id },
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
    const UsuarioUpdate = Object.assign(
      Usuario,
      updateUsuarioDto,
    );
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
