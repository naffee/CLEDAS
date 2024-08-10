import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuspectProfileDto,FingerPrintDto,KnownAssociatesDto,ArrestingStationDto, UpdateSuspectProfileDto, UpdateArrestingStationDto, UpdateKnownAssociatesDto, UpdateFingerPrintDto,SendOtpDto } from 'src/dto/users.dto';
import { ArrestingStationEntity } from 'src/database/entities/arrestingstation.entity';
import { FingerPrintEntity } from 'src/database/entities/fingerprint.entity';
import { KnownAssociateEntity } from 'src/database/entities/knownassociates.entity';
import { SuspectProfileEntity } from 'src/database/entities/suspectprofile.entity';

@Injectable()
export class SuspectService {
    constructor(
    @InjectRepository(SuspectProfileEntity)
    private suspectsRepository: Repository<SuspectProfileEntity>,
    @InjectRepository(KnownAssociateEntity)
    private knownassociatesRepository: Repository<KnownAssociateEntity>,
    @InjectRepository(FingerPrintEntity)
    private fingerprintsRepository: Repository<FingerPrintEntity>,
    @InjectRepository(ArrestingStationEntity)
    private arrestingstationRepository: Repository<ArrestingStationEntity>)
    {}

    async createSuspectProfile(suspectprofile:SuspectProfileDto){
        const newSuspectProfile = this.suspectsRepository.create(suspectprofile);
        return this.suspectsRepository.save(newSuspectProfile);
    }

    async createFingerPrint(id: string,fingerPrint:FingerPrintDto){
        const suspectprofile = await this.suspectsRepository.findOneBy({id});
        if (!suspectprofile)
            throw new HttpException(
                'User not found.Cannot create Post',
                HttpStatus.BAD_REQUEST,);
        const newFingerPrint = this.fingerprintsRepository.create(fingerPrint);
        return this.fingerprintsRepository.save(newFingerPrint);
    }

    async createKnownAssociates(id: string,knownAssociates:KnownAssociatesDto){
        const suspectprofile = await this.suspectsRepository.findOneBy({id});
        if (!suspectprofile)
            throw new HttpException(
                'User not found.Cannot create Post',
                HttpStatus.BAD_REQUEST,);
        const newKnownAssociates = this.suspectsRepository.create(knownAssociates);
        return this.suspectsRepository.save(newKnownAssociates);
    }

    async createArrestingStation(id: string,arrestingStation:ArrestingStationDto){
        const suspectprofile = await this.suspectsRepository.findOneBy({id});
        if (!suspectprofile)
            throw new HttpException(
                'User not found.Cannot create Profile',
                HttpStatus.BAD_REQUEST,);
        const newArrestingStation = this.arrestingstationRepository.create(arrestingStation);
        const savedArrestingStation = await this.arrestingstationRepository.save(newArrestingStation);
        suspectprofile.arrestingStation = savedArrestingStation
        return this.suspectsRepository.save(suspectprofile);
    }

    async getAllSuspects(): Promise<SuspectProfileEntity[]>{
        return this.suspectsRepository.find({relations:['arrestingstation','fingerprints','knownassociates']})
    }

    async showOneProfile(userId: string){
        return this.suspectsRepository.findOne({where: {id: userId}, relations:['arrestingstation','fingerprint','knownassosciates']});
    }

    async deleteSuspectProfile(userId: string){
         return this.suspectsRepository.delete(userId);
    }

    async updateSuspectProfile(SuspectProfile: UpdateSuspectProfileDto, profileId:number){
        return this.suspectsRepository.update(profileId, SuspectProfile)

    }

    async updateArrestingStation(arrestingStation: UpdateArrestingStationDto, stationId:number){
        return this.arrestingstationRepository.update(stationId, arrestingStation)
    }

    async updateKnownAssociates(knownAssociates: UpdateKnownAssociatesDto, associateId:number){
        return this.knownassociatesRepository.update(associateId, knownAssociates)
    }

    async updateFingerPrint(fingerPrint: UpdateFingerPrintDto, fingerPrintId:number){
        return this.fingerprintsRepository.update(fingerPrintId,fingerPrint,)

    }

    //async sendOtp(sendOtp: SendOtpDto): Promise<void> {
        //const otp = Math.floor(100000 + Math.random() * 900000).toString();
      //}
}
