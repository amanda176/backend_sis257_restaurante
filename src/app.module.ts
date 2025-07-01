import { Module } from '@nestjs/common';
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
  imports: [CategoriaPlatillosModule, ClientesModule, DetallePedidosModule, DireccionesModule, EmpleadosModule, PedidosModule, PlatillosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
