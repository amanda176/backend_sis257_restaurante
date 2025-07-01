import { Module } from '@nestjs/common';
import { CategoriaPlatillosService } from './categoria_platillos.service';
import { CategoriaPlatillosController } from './categoria_platillos.controller';

@Module({
  controllers: [CategoriaPlatillosController],
  providers: [CategoriaPlatillosService],
})
export class CategoriaPlatillosModule {}
