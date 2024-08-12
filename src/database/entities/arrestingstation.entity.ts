import { Column, Entity, ManyToOne, ManyToMany, JoinTable,OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { CustomEntity } from './custom.entity';

@Entity('Users')
export class ArrestingStationEntity extends CustomEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name_of_station', length: 255, nullable: true })
    nameOfStation: string;

    @Column({ name: 'arresting_officer', length: 255, nullable: true })
    arrestingOfficer: string;

    @Column({ name: 'station_head', length: 255, nullable: true })
    stationHead: string;

    @Column({ name: 'police_division', length: 255, nullable: true })
    policeDivision: string;

    @Column({ name: 'police_command', length: 255, nullable: true })
    policeCommand: string;

    @Column({ name: 'police_zone', length: 255, nullable: true })
    policeZone: string;

    
}