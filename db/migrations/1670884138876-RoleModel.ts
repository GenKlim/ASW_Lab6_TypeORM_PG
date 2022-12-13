import {MigrationInterface, QueryRunner} from "typeorm";

export class UserModel21670884138876 implements MigrationInterface {
    name = 'RoleModel1670884138876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Roles" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, CONSTRAINT "UQ_02b45e9d9fc42759c6b39b18601" UNIQUE ("ID"), CONSTRAINT "PK_02b45e9d9fc42759c6b39b18601" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_249c066b694e82530ab3de61ae9"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "fileID"`);
		await queryRunner.query(`ALTER TABLE "Users" ADD "Password" bit varying(8192) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "UserName" character varying(128) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Birthday" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Gender" bit NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Height" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Weight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "LastActivity" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "RoleID" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "FileID" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_58f639b7227c4423b10bdc5483e" UNIQUE ("ID")`);
        await queryRunner.query(`ALTER TABLE "Files" ADD CONSTRAINT "UQ_3ef8364a4ad49af37753a9201b8" UNIQUE ("ID")`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_e67ce0e08304883e484a53c87f4" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_249c066b694e82530ab3de61ae9" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_249c066b694e82530ab3de61ae9"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_e67ce0e08304883e484a53c87f4"`);
        await queryRunner.query(`ALTER TABLE "Files" DROP CONSTRAINT "UQ_3ef8364a4ad49af37753a9201b8"`);
		await queryRunner.query(`ALTER TABLE "Users" ADD "fileID" uuid`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_249c066b694e82530ab3de61ae9" FOREIGN KEY ("fileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_58f639b7227c4423b10bdc5483e"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "FileID"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "RoleID"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "LastActivity"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Weight"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Height"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Gender"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Birthday"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "UserName"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Password"`);
        await queryRunner.query(`DROP TABLE "Roles"`);
    }

}
