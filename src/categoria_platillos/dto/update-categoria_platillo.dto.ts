import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaPlatilloDto } from './create-categoria_platillo.dto';

export class UpdateCategoriaPlatilloDto extends PartialType(CreateCategoriaPlatilloDto) {}
