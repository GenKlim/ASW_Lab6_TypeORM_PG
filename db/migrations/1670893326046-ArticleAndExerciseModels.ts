import {MigrationInterface, QueryRunner} from "typeorm";

export class ArticleAndExerciseModels1670893326046 implements MigrationInterface {
    name = 'ArticleAndExerciseModels1670893326046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Exercises" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, "Description" character varying(10000) NOT NULL, "FileID" uuid, CONSTRAINT "PK_17da05412c6f7b5483016d2602d" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Articles" ("ID" uuid NOT NULL, "Title" character varying(128) NOT NULL, "Description" character varying(10000) NOT NULL, "FileID" uuid, CONSTRAINT "PK_375e4742952f661a1fb94ff19a3" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Exercises" ADD CONSTRAINT "FK_716505fa7ceddb4487357186429" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Articles" ADD CONSTRAINT "FK_35e43a40d8f1792caf473b804cc" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Articles" DROP CONSTRAINT "FK_35e43a40d8f1792caf473b804cc"`);
        await queryRunner.query(`ALTER TABLE "Exercises" DROP CONSTRAINT "FK_716505fa7ceddb4487357186429"`);
        await queryRunner.query(`DROP TABLE "Articles"`);
        await queryRunner.query(`DROP TABLE "Exercises"`);
    }

}
