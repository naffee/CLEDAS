import { Column, Entity, ManyToOne, ManyToMany, JoinTable,OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { CustomEntity } from './custom.entity';
import { SuspectProfileEntity } from './suspectprofile.entity';

@Entity('Users')
export class KnownAssociateEntity extends CustomEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'knownassociates', length: 255, unique: true, nullable: true })
    fingerprint:string;


    @ManyToOne( () => SuspectProfileEntity, (suspectprofile) => suspectprofile.knownassociates)
    suspectprofile: SuspectProfileEntity;
}