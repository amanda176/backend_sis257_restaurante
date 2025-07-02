import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Pedido } from 'src/pedidos/entities/pedido.entity';

@Entity('direcciones')
export class Direccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  direccion: string;

  @Column({ length: 10, nullable: true })
  piso: string;

  @Column({ length: 250, nullable: true })
  indicaciones: string;

  @Column({ length: 20 })
  estado: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @Column({ name: 'id_cliente' })
  idCliente: number;

  @OneToMany(() => Pedido, (pedidos) => pedidos.direcciones)
  pedidos: Pedido[];

  @ManyToOne(() => Cliente, (clientes) => clientes.direcciones)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  clientes: Cliente;
}
