import { Injectable } from '@nestjs/common';
import { CreatePlatilloDto } from './dto/create-platillo.dto';
import { UpdatePlatilloDto } from './dto/update-platillo.dto';

@Injectable()
export class PlatillosService {
  create(createPlatilloDto: CreatePlatilloDto) {
    return 'This action adds a new platillo';
  }

  findAll() {
    return `This action returns all platillos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} platillo`;
  }

  update(id: number, updatePlatilloDto: UpdatePlatilloDto) {
    return `This action updates a #${id} platillo`;
  }

  remove(id: number) {
    return `This action removes a #${id} platillo`;
  }
}
