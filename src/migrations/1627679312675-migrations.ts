import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1627679312675 implements MigrationInterface {
    name = 'migrations1627679312675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "semester" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9129c1fd35aa4aded7a9825b38d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "course" ADD "semesterId" integer`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_db17df8fd89e63caecbd53ae6ad" FOREIGN KEY ("semesterId") REFERENCES "semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_db17df8fd89e63caecbd53ae6ad"`);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "semesterId"`);
        await queryRunner.query(`DROP TABLE "semester"`);
    }

}
