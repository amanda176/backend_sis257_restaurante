import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaPlatilloDto } from './create-categoria_platillo.dto';

export class UpdateCategoriaPlatilloDto extends PartialType(CreateCategoriaPlatilloDto) {}
