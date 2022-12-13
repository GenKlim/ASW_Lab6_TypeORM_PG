import {MigrationInterface, QueryRunner} from "typeorm";

export class StickerModel1670896935152 implements MigrationInterface {
    name = 'StickerModel1670896935152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Stickers" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, "Icon" integer NOT NULL, CONSTRAINT "PK_c4bbcdf21f56f52e2490004cde0" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Stickers_Statistics" ("ID" uuid NOT NULL, "Date" date NOT NULL, "StickerID" uuid NOT NULL, "StatisticID" uuid NOT NULL, CONSTRAINT "PK_8244ea1f819902555653d4c6eb2" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Stickers_Statistics" ADD CONSTRAINT "FK_8d76d98ddbc83fc21e2f5e2a547" FOREIGN KEY ("StickerID") REFERENCES "Stickers"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Stickers_Statistics" ADD CONSTRAINT "FK_d30a49265f52ef19d3ebe9ebbb4" FOREIGN KEY ("StatisticID") REFERENCES "Statistics"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Stickers_Statistics" DROP CONSTRAINT "FK_d30a49265f52ef19d3ebe9ebbb4"`);
        await queryRunner.query(`ALTER TABLE "Stickers_Statistics" DROP CONSTRAINT "FK_8d76d98ddbc83fc21e2f5e2a547"`);
        await queryRunner.query(`DROP TABLE "Stickers_Statistics"`);
        await queryRunner.query(`DROP TABLE "Stickers"`);
    }

}
