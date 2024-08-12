import { MigrationInterface, QueryRunner } from "typeorm";

export class VVerisonNumber1723446919543 implements MigrationInterface {
    name = 'VVerisonNumber1723446919543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "specialIdentification" character varying, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_b46175f9929218ed469d7808c33" UNIQUE ("specialIdentification"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name_of_station" character varying(255), "arresting_officer" character varying(255), "station_head" character varying(255), "police_division" character varying(255), "police_command" character varying(255), "police_zone" character varying(255), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "SuspectProfile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "first_name" character varying(255), "middle_name" character varying(255), "last_nmae" character varying(255), "alias" character varying(255), "phone_number" character varying(255), "email" character varying(255) NOT NULL, "suspect_status" character varying(255), "nationality" character varying(255), "state_of_origin" character varying(255), "LGA" character varying(255), "religion" character varying(255), "sex" character varying(255), "height" character varying(255), "weight" character varying(255), "eye_colour" character varying(255), "bvn" character varying(255), "nin" character varying(255), "driver_license_number" character varying(255), "arrestingStationId" uuid, CONSTRAINT "UQ_dc8f4134201eb3d47aac3b2bef5" UNIQUE ("phone_number"), CONSTRAINT "UQ_abefaafdaeaed32fc7b7c285afb" UNIQUE ("email"), CONSTRAINT "UQ_7071122b9223ec77ce96443ff80" UNIQUE ("religion"), CONSTRAINT "UQ_6b291d6cb622f143c9301911ba8" UNIQUE ("sex"), CONSTRAINT "UQ_430beafd5f2e058ef85f0b207d6" UNIQUE ("height"), CONSTRAINT "UQ_7292d4583125534d26c0ea845af" UNIQUE ("weight"), CONSTRAINT "UQ_63757f34e586ebe5706e6eb9276" UNIQUE ("eye_colour"), CONSTRAINT "UQ_b1287bd25d6d53e602d9a71da8c" UNIQUE ("bvn"), CONSTRAINT "UQ_ae586fb20e26dc8671300d442c4" UNIQUE ("nin"), CONSTRAINT "UQ_3e89164e830771ae3123f18b515" UNIQUE ("driver_license_number"), CONSTRAINT "REL_9b3b648dc51d2851ea32419f30" UNIQUE ("arrestingStationId"), CONSTRAINT "PK_e1f00568be399f2bc8293c715e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "name_of_station"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "arresting_officer"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "station_head"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_division"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_command"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_zone"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "name_of_station" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "arresting_officer" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "station_head" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_division" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_command" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_zone" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "fingerprint" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_8d67dab504f2effd6c8b39adf1c" UNIQUE ("fingerprint")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "suspectprofileId" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "knownassociates" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_b9bad8ae1c07936fd7f1df590e7" UNIQUE ("knownassociates")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_642e6224e64564b1a16974b7c3f" FOREIGN KEY ("suspectprofileId") REFERENCES "SuspectProfile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "SuspectProfile" ADD CONSTRAINT "FK_9b3b648dc51d2851ea32419f30c" FOREIGN KEY ("arrestingStationId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SuspectProfile" DROP CONSTRAINT "FK_9b3b648dc51d2851ea32419f30c"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_642e6224e64564b1a16974b7c3f"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_b9bad8ae1c07936fd7f1df590e7"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "knownassociates"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "suspectprofileId"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_8d67dab504f2effd6c8b39adf1c"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "fingerprint"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_zone"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_command"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "police_division"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "station_head"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "arresting_officer"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "name_of_station"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_zone" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_command" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "police_division" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "station_head" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "arresting_officer" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "name_of_station" character varying(255)`);
        await queryRunner.query(`DROP TABLE "SuspectProfile"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
