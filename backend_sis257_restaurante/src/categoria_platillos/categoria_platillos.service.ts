import { Injectable } from '@nestjs/common';
import { CreateCategoriaPlatilloDto } from './dto/create-categoria_platillo.dto';
import { UpdateCategoriaPlatilloDto } from './dto/update-categoria_platillo.dto';

@Injectable()
export class CategoriaPlatillosService {
  create(createCategoriaPlatilloDto: CreateCategoriaPlatilloDto) {
    return 'This action adds a new categoriaPlatillo';
  }

  findAll() {
    return `This action returns all categoriaPlatillos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaPlatillo`;
  }

  update(id: number, updateCategoriaPlatilloDto: UpdateCategoriaPlatilloDto) {
    return `This action updates a #${id} categoriaPlatillo`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaPlatillo`;
  }
}
