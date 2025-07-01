import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { CategoriaPlatillosModule } from './categoria_platillos/categoria_platillos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DetallePedidosModule } from './detalle_pedidos/detalle_pedidos.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PlatillosModule } from './platillos/platillos.module';
import { UsuariosModule } from './usuarios/usuarios.module';



@Module({
  imports: [
    ConfigModule.forRoot(),//19_9_1 para crear el .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),//New
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '*/**/entities/*.{ts|js}'],//23_09_1
      synchronize: true,
      autoLoadEntities: true,//14_09_3 TRUE PARA QUE CARGUE DE MANERA AUTOMATICA EN EL MODULE
    }),
    CategoriaPlatillosModule,
    ClientesModule,
    DetallePedidosModule,
    DireccionesModule,
    EmpleadosModule,
    PedidosModule,
    PlatillosModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
