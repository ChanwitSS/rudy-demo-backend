import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695741012793 implements MigrationInterface {
    name = ' $npmConfigName1695741012793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "id_no" character varying NOT NULL, "tel_no" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
