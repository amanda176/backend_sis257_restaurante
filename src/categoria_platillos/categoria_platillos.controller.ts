import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoriaPlatillosService } from './categoria_platillos.service';
import { CreateCategoriaPlatilloDto } from './dto/create-categoria_platillo.dto';
import { UpdateCategoriaPlatilloDto } from './dto/update-categoria_platillo.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Categoria Platillos') // nombre dentro del backend
@Controller('categoriaPlatillos')
export class CategoriaPlatillosController {
  constructor(
    private readonly categoriaPlatillosService: CategoriaPlatillosService,
  ) {}

  @Post()
  create(@Body() createCategoriaPlatilloDto: CreateCategoriaPlatilloDto) {
    return this.categoriaPlatillosService.create(createCategoriaPlatilloDto);
  }

  @Get()
  findAll() {
    return this.categoriaPlatillosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaPlatillosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaPlatilloDto: UpdateCategoriaPlatilloDto,
  ) {
    return this.categoriaPlatillosService.update(
      +id,
      updateCategoriaPlatilloDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaPlatillosService.remove(+id);
  }
}
