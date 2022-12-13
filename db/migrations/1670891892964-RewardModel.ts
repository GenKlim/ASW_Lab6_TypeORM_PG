import {MigrationInterface, QueryRunner} from "typeorm";

export class RewardModel1670891892964 implements MigrationInterface {
    name = 'RewardModel1670891892964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_249c066b694e82530ab3de61ae9"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_e67ce0e08304883e484a53c87f4"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_05808b2c00a479ddc906b8735f2"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_9bca4df56720d576199d984da53"`);
        await queryRunner.query(`CREATE TABLE "Users_Rewards" ("ID" uuid NOT NULL, "DateTime" TIMESTAMP NOT NULL, "UserID" uuid NOT NULL, "RewardID" uuid NOT NULL, CONSTRAINT "PK_8c2dabc6d107d23e16a7e2f22e4" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`CREATE TABLE "Rewards" ("ID" uuid NOT NULL, "Name" character varying(128) NOT NULL, "Cost" integer NOT NULL, "FileID" uuid, CONSTRAINT "PK_984fa1b0a0399843cb9aee91c6d" PRIMARY KEY ("ID"))`);
        await queryRunner.query(`ALTER TABLE "Files" DROP CONSTRAINT "UQ_3ef8364a4ad49af37753a9201b8"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_58f639b7227c4423b10bdc5483e"`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Birthday" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Height" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Weight" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "LastActivity" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Roles" DROP CONSTRAINT "UQ_02b45e9d9fc42759c6b39b18601"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ALTER COLUMN "RoleID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ALTER COLUMN "PermissionID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users_Rewards" ADD CONSTRAINT "FK_65341c1a8f21e44930f1726203f" FOREIGN KEY ("UserID") REFERENCES "Users"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users_Rewards" ADD CONSTRAINT "FK_b17322ad651baf60ec840728bd4" FOREIGN KEY ("RewardID") REFERENCES "Rewards"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Rewards" ADD CONSTRAINT "FK_1cf8d9477982aae8b861b6fe4d7" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_50820383c86bc3128f4b2e341c5" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_522a0b94ab3543e1e6363369792" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_547691ac0330b14be9b78df2177" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_051eaddc18ed52e5f85b6c5d1e9" FOREIGN KEY ("PermissionID") REFERENCES "Permissions"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_051eaddc18ed52e5f85b6c5d1e9"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" DROP CONSTRAINT "FK_547691ac0330b14be9b78df2177"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_522a0b94ab3543e1e6363369792"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_50820383c86bc3128f4b2e341c5"`);
        await queryRunner.query(`ALTER TABLE "Rewards" DROP CONSTRAINT "FK_1cf8d9477982aae8b861b6fe4d7"`);
        await queryRunner.query(`ALTER TABLE "Users_Rewards" DROP CONSTRAINT "FK_b17322ad651baf60ec840728bd4"`);
        await queryRunner.query(`ALTER TABLE "Users_Rewards" DROP CONSTRAINT "FK_65341c1a8f21e44930f1726203f"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ALTER COLUMN "PermissionID" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ALTER COLUMN "RoleID" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Roles" ADD CONSTRAINT "UQ_02b45e9d9fc42759c6b39b18601" UNIQUE ("ID")`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "LastActivity" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Weight" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Height" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "Birthday" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_58f639b7227c4423b10bdc5483e" UNIQUE ("ID")`);
        await queryRunner.query(`ALTER TABLE "Files" ADD CONSTRAINT "UQ_3ef8364a4ad49af37753a9201b8" UNIQUE ("ID")`);
        await queryRunner.query(`DROP TABLE "Rewards"`);
        await queryRunner.query(`DROP TABLE "Users_Rewards"`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_9bca4df56720d576199d984da53" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Roles_Permissions" ADD CONSTRAINT "FK_05808b2c00a479ddc906b8735f2" FOREIGN KEY ("PermissionID") REFERENCES "Permissions"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_e67ce0e08304883e484a53c87f4" FOREIGN KEY ("RoleID") REFERENCES "Roles"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_249c066b694e82530ab3de61ae9" FOREIGN KEY ("FileID") REFERENCES "Files"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
