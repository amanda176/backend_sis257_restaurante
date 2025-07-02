import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  usuario_login: string;

  @Column({ length: 150, select: false })
  clave: string;

  @Column({ length: 50 })
  rol: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @Column({ name: 'id_empleado' })
  idEmpleado: number;

  @ManyToOne(() => Empleado, (empleados) => empleados.usuarios)
  @JoinColumn({ name: 'id_empleado', referencedColumnName: 'id' })
  empleados: Empleado;
}
