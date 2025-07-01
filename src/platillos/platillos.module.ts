import { Module } from '@nestjs/common';
import { PlatillosService } from './platillos.service';
import { PlatillosController } from './platillos.controller';

@Module({
  controllers: [PlatillosController],
  providers: [PlatillosService],
})
export class PlatillosModule {}
