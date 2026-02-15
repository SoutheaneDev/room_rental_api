import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    roomNumber: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    width: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    height: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    dimension: number;

    @Column({ type: 'json' })
    description: Record<string, any>;
}