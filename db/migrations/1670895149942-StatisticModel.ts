import {MigrationInterface, QueryRunner} from "typeorm";

export class StatisticModel1670895149942 implements MigrationInterface {
    name = 'StatisticModel1670895149942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "StatisticAdditions" ("ID" uuid NOT NULL, "Text" character varying(128) NOT NULL, "Type" integer NOT NULL, "IsDone" bit NOT NULL, "StatisticID" uuid NOT NULL, CONSTRAINT "PK_37c164e8cae41047fe99576baea" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Statistics" ("ID" uuid NOT NULL, "Date" date NOT NULL, "GoalKCal" double precision NOT NULL, "GoalProteins" double precision NOT NULL, "GoalCarboHydrates" double precision NOT NULL, "GoalFats" double precision NOT NULL, "ActualKCal" double precision NOT NULL, "ActualProteins" double precision NOT NULL, "ActualCarboHydrates" double precision NOT NULL, "ActualFats" double precision NOT NULL, "UserID" uuid, CONSTRAINT "PK_17b54bb1bf60a249c3be2916f70" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "StatisticAdditions" ADD CONSTRAINT "FK_89f95542f7fe9422bf9c66d2df9" FOREIGN KEY ("StatisticID") REFERENCES "Statistics"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Statistics" ADD CONSTRAINT "FK_425407cba383f25d877b422240f" FOREIGN KEY ("UserID") REFERENCES "Users"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Statistics" DROP CONSTRAINT "FK_425407cba383f25d877b422240f"`);
        await queryRunner.query(`ALTER TABLE "StatisticAdditions" DROP CONSTRAINT "FK_89f95542f7fe9422bf9c66d2df9"`);
        await queryRunner.query(`DROP TABLE "Statistics"`);
        await queryRunner.query(`DROP TABLE "StatisticAdditions"`);
    }

}
