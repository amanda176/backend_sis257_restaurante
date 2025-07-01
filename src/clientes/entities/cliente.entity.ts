import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from 'typeorm';

@Entity('clientes')
export class Cliente {

  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  nombreCompleto: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cedula_identidad: string;

  @Column({ type: 'int', nullable: false })
  celular: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;
}
