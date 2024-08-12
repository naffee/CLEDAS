import { Module } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { SuspectController } from './suspect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArrestingStationEntity} from 'src/database/entities/arrestingstation.entity';
import { FingerPrintEntity } from 'src/database/entities/fingerprint.entity';
import { KnownAssociateEntity } from 'src/database/entities/knownassociates.entity';
import { SuspectProfileEntity } from 'src/database/entities/suspectprofile.entity';


@Module({
  imports:[TypeOrmModule.forFeature([ArrestingStationEntity,FingerPrintEntity,KnownAssociateEntity,SuspectProfileEntity])],
  providers: [SuspectService],
  controllers: [SuspectController],
  exports: [SuspectService]
})
export class SuspectModule {}
