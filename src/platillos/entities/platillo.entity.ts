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
import { CategoriaPlatillo } from '../../categoria_platillos/entities/categoria_platillo.entity';
import { DetallePedido } from 'src/detalle_pedidos/entities/detalle_pedido.entity';

@Entity('platillos')
export class Platillo {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column('int')
  stock: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  tiempo_preparacion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @Column({ name: 'id_categoriaPlatillo' })
  idCategoriaPlatillo: number;

  @ManyToOne(
    () => CategoriaPlatillo,
    (categoria_platillos) => categoria_platillos.platillos,
  )
  @JoinColumn({ name: 'id_categoriaPlatillo', referencedColumnName: 'id' })
  categoria_platillos: CategoriaPlatillo;

  @OneToMany(() => DetallePedido, (detalles) => detalles.platillos)
  detalles: DetallePedido;
}
