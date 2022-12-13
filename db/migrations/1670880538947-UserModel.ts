import {MigrationInterface, QueryRunner} from "typeorm";

export class UserModel1670880538947 implements MigrationInterface {
    name = 'UserModel1670880538947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("ID" uuid NOT NULL, "Login" character varying(128) NOT NULL, "fileID" uuid, CONSTRAINT "UQ_58f639b7227c4423b10bdc5483e" UNIQUE ("ID"), CONSTRAINT "PK_58f639b7227c4423b10bdc5483e" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Files" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, "Expansion" character varying(5) NOT NULL, "Path" character varying(128) NOT NULL, "Size" integer, CONSTRAINT "UQ_3ef8364a4ad49af37753a9201b8" UNIQUE ("ID"), CONSTRAINT "PK_3ef8364a4ad49af37753a9201b8" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_249c066b694e82530ab3de61ae9" FOREIGN KEY ("fileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_249c066b694e82530ab3de61ae9"`);
        await queryRunner.query(`DROP TABLE "Files"`);
        await queryRunner.query(`DROP TABLE "Users"`);
		await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "txt" character varying NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
    }

}
