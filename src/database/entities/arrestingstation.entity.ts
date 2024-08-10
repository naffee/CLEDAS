import { Column, Entity, ManyToOne, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { CustomEntity } from './custom.entity';

@Entity('Users')
export class ArrestingStationEntity extends CustomEntity{
    @Column({ name: 'name_of_station', length: 255, nullable: false })
    nameOfStation: string;

    @Column({ name: 'arresting_officer', length: 255, nullable: false })
    arrestingOfficer: string;

    @Column({ name: 'station_head', length: 255, nullable: false })
    stationHead: string;

    @Column({ name: 'police_division', length: 255, nullable: false })
    policeDivision: string;

    @Column({ name: 'police_command', length: 255, nullable: false })
    policeCommand: string;

    @Column({ name: 'police_zone', length: 255, nullable: false })
    policeZone: string;

    
}