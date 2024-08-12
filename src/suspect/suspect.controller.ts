import { Controller,Get,Post,Patch,Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { SuspectProfileDto, UpdateSuspectProfileDto,} from 'src/dto/users.dto';
import { JwtAuthGuard } from 'src/helper/guards/jwt-auth.guard';
import { SuspectProfileEntity } from 'src/database/entities/suspectprofile.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('suspect')
@Controller('suspect')
export class SuspectController {
    constructor(private suspectService: SuspectService){}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createSuspectProfile(@Body() suspectProfile: SuspectProfileDto){
        const newSuspectProfile = new SuspectProfileEntity()
        Object.assign(newSuspectProfile,suspectProfile)
        return this.suspectService.createSuspectProfile(newSuspectProfile)
    };

    @Get('get')
    async getAllSuspects() {
     return this.suspectService.getAllSuspects();
   };

   @Get('suspect/:id')
   async getSuspect(@Param('id') id: string) {
    return await this.suspectService.findById(id);
   }

   @Patch('update/:id')
   async updateSuspect(@Param('id') id: string, @Body() suspectProfile: UpdateSuspectProfileDto) {
     const suspect = new SuspectProfileEntity();
     Object.assign(suspect, suspectProfile);
     await this.suspectService.updateSuspect(id, suspect );
     return { message: 'Product successfully updated', id };
   }

   @Delete('/:id')
   async deleteSuspect(@Param('id') id: string) {
     await this.suspectService.deleteSuspect(id);
     return { message: 'suspect successfully deleted', id };
   }



    // @UseGuards(JwtAuthGuard)
    // @Post()
    // createArrestingStation(@Param() id: string,@Body() arrestingStation:ArrestingStationDto ){
    //     return this.suspectService.createArrestingStation(id,arrestingStation)};

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // createFingerPrint(@Param() id: string,@Body() fingerPrint:FingerPrintDto ){
    //     return this.suspectService.createFingerPrint(id,fingerPrint)};

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // createKnownAssociates(@Param() id: string,@Body() knownAssociates:KnownAssociatesDto ){
    //     return this.suspectService.createKnownAssociates(id,knownAssociates)};

    // @UseGuards(JwtAuthGuard) 
    // @Get('userId')
    // async getSuspectProfile(@Param('userId') userId: string){
    //     return this.suspectService.showOneProfile(userId)
    // };

    // @UseGuards(JwtAuthGuard)
    // @Get()
    // getAllSuspects() {
    //     return this.suspectService.getAllSuspects()
    // }

    // @UseGuards(JwtAuthGuard)
    // @Patch('suspectprofile/userId')
    // updateSuspectProfile(@Body() body: any, @Param('userId') userId ){
    //     return this.suspectService.updateSuspectProfile(body, userId);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Patch('arrestingstation/userId')
    // updateArrestingStation(@Body() body: any, @Param('userId') userId ){
    //     return this.suspectService.updateArrestingStation(body, userId);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Patch('fingerprint/userId')
    // updateFingerPrint(@Body() body: any, @Param('userId') userId ){
    //     return this.suspectService.updateFingerPrint(body, userId);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Patch('knownassociates/userId')
    // updateKnownAssociates(@Body() body: any, @Param('userId') userId ){
    //     return this.suspectService.updateKnownAssociates(body, userId);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Delete('userId')
    // deleteUser(@Param('userId') userId){
    //     return this.suspectService.deleteSuspectProfile(userId)
    // };
    
    
    

}
