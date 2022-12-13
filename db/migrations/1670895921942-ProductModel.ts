import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductModel1670895921942 implements MigrationInterface {
    name = 'ProductModel1670895921942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Products" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, "Weight" double precision NOT NULL, "KCal" double precision NOT NULL, "Proteins" double precision NOT NULL, "CarboHydrates" double precision NOT NULL, "Fats" double precision NOT NULL, CONSTRAINT "PK_6791e874832a4819d75cb262c80" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Products_Statistics" ("ID" uuid NOT NULL, "IsEaten" bit NOT NULL, "StatisticID" uuid NOT NULL, "ProductID" uuid NOT NULL, CONSTRAINT "PK_27c67f2d870ba0f176fb443df92" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Products_Statistics" ADD CONSTRAINT "FK_a2ac914e413e061acf136339327" FOREIGN KEY ("StatisticID") REFERENCES "Statistics"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Products_Statistics" ADD CONSTRAINT "FK_cd9641588258d76d404bc1447a1" FOREIGN KEY ("ProductID") REFERENCES "Products"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products_Statistics" DROP CONSTRAINT "FK_cd9641588258d76d404bc1447a1"`);
        await queryRunner.query(`ALTER TABLE "Products_Statistics" DROP CONSTRAINT "FK_a2ac914e413e061acf136339327"`);
        await queryRunner.query(`DROP TABLE "Products_Statistics"`);
        await queryRunner.query(`DROP TABLE "Products"`);
    }

}
