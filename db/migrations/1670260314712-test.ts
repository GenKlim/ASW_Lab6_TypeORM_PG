import {MigrationInterface, QueryRunner} from "typeorm";

export class test1670260314712 implements MigrationInterface {
    name = 'test1670260314712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "txt" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
