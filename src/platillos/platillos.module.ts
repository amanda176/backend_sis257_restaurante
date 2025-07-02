import { Module } from '@nestjs/common';
import { PlatillosService } from './platillos.service';
import { PlatillosController } from './platillos.controller';
import { Platillo } from './entities/platillo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Platillo])],
  controllers: [PlatillosController],
  providers: [PlatillosService],
})
export class PlatillosModule {}
