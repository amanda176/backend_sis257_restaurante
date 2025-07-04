import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DetallePedidosService } from './detalle_pedidos.service';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Detalle Pedidos')// nombre dentro del backend
@Controller('detalle-pedidos')
export class DetallePedidosController {
  constructor(private readonly detallePedidosService: DetallePedidosService) {}

  @Post()
  create(@Body() createDetallePedidoDto: CreateDetallePedidoDto) {
    return this.detallePedidosService.create(createDetallePedidoDto);
  }

  @Get()
  findAll() {
    return this.detallePedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallePedidosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallePedidoDto: UpdateDetallePedidoDto) {
    return this.detallePedidosService.update(+id, updateDetallePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallePedidosService.remove(+id);
  }
}
