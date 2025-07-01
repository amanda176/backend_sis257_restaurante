import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaPlatillosModule } from './categoria_platillos/categoria_platillos.module';

@Module({
  imports: [CategoriaPlatillosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
