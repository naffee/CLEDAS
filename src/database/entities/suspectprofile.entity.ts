import { Column, Entity, OneToOne, ManyToMany, JoinTable,OneToMany, JoinColumn } from 'typeorm';
import { CustomEntity } from './custom.entity';
import { ArrestingStationEntity } from './arrestingstation.entity';
import { FingerPrintEntity } from './fingerprint.entity';
import { KnownAssociateEntity } from './knownassociates.entity';

@Entity('SuspectProfile')
export class SuspectProfileEntity extends CustomEntity{
    @Column({ name: 'first_name', length: 255, nullable: false })
    firstName: string;

    @Column({ name: 'middle_name', length: 255, nullable: false })
    middleName: string;

    @Column({ name: 'last_nmae', length: 255, nullable: false })
    lastName: string;

    @Column({ name: 'alias', length: 255, nullable: true })
    alias: string;

    @Column({ name: 'phone_number', length: 255, unique: true, nullable: true })
    phoneNumber: string;

    @Column({ name: 'email', length: 255, unique: true, nullable: false })
    email: string;

    @Column({ name: 'suspect_status', length: 255, nullable: true })
    suspectStatus: string;

    @Column({ name: 'nationality', length: 255, nullable: false })
    nationality: string;

    @Column({ name: 'state_of_origin', length: 255, nullable: true })
    stateOfOrigin: string;

    @Column({ name:'LGA', length: 255, nullable: true })
    LGA: string;

    @Column({ name: 'religion', length: 255, unique: true, nullable: true })
    religion: string;

    @Column({ name: 'sex', length: 255, unique: true, nullable: true })
    sex: string;

    @Column({ name: 'height', length: 255, unique: true, nullable: true })
    height: string;

    @Column({ name: 'weight', length: 255, unique: true, nullable: true })
    weight: string;

    @Column({ name: 'eye_colour', length: 255, unique: true, nullable: true })
    eyeColour: string;

    @Column({ name: 'bvn', length: 255, unique: true, nullable: true })
    bvn: string;

    @Column({ name: 'nin', length: 255, unique: true, nullable: true })
    nin: string;

    @Column({ name: 'driver_license_number', length: 255, unique: true, nullable: true })
    driversLicenseNumber: string;

    @OneToOne( () => ArrestingStationEntity)
    @JoinColumn()
    arrestingStation :ArrestingStationEntity;

    @OneToMany( () => FingerPrintEntity, (fingerPrint) => 
    fingerPrint.suspectprofile)
    fingerprint: FingerPrintEntity[];

    @OneToMany( () => KnownAssociateEntity, (knownassociates) => knownassociates.suspectprofile)
    knownassociates: KnownAssociateEntity[];




}