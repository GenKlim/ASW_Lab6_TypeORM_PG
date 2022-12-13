import {MigrationInterface, QueryRunner} from "typeorm";

export class PermissionModel1670887528486 implements MigrationInterface {
    name = 'PermissionModel1670887528486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Permissions" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, CONSTRAINT "UQ_d74cb0acb93a8aece291acc09fd" UNIQUE ("ID"), CONSTRAINT "PK_d74cb0acb93a8aece291acc09fd" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Roles_Permissions" ("ID" uuid NOT NULL, "RoleID" uuid, "PermissionID" uuid, CONSTRAINT "UQ_622bb1888c017372704e76a4913" UNIQUE ("ID"), CONSTRAINT "PK_622bb1888c017372704e76a4913" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_e67ce0e08304883e484a53c87f4"`);
        await queryRunner.query(`ALTER TABLE "Roles" ADD CONSTRAINT "UQ_02b45e9d9fc42759c6b39b18601" UNIQUE ("ID")`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_9bca4df56720d576199d984da53" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_05808b2c00a479ddc906b8735f2" FOREIGN KEY ("PermissionID") REFERENCES "Permissions"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_e67ce0e08304883e484a53c87f4" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_e67ce0e08304883e484a53c87f4"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_05808b2c00a479ddc906b8735f2"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_9bca4df56720d576199d984da53"`);
        await queryRunner.query(`ALTER TABLE "Roles" DROP CONSTRAINT "UQ_02b45e9d9fc42759c6b39b18601"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_e67ce0e08304883e484a53c87f4" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "Roles_Permissions"`);
        await queryRunner.query(`DROP TABLE "Permissions"`);
    }

}
