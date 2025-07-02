import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombres: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  primer_apellido: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  segundo_apellido: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  cedula_identidad: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  direccion: string;

  @Column({ type: 'int', nullable: false })
  celular: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @OneToMany(() => Usuario, (usuarios) => usuarios.empleados)
  usuarios: Usuario;
}
