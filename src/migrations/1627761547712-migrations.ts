import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1627761547712 implements MigrationInterface {
    name = 'migrations1627761547712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professors_course_course" ("professorsId" integer NOT NULL, "courseId" integer NOT NULL, CONSTRAINT "PK_ccb20baf42b47fdcda5f12aff52" PRIMARY KEY ("professorsId", "courseId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_94f4570a42404ea80c01981986" ON "professors_course_course" ("professorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e559e63c2428f001d70874b8cc" ON "professors_course_course" ("courseId") `);
        await queryRunner.query(`ALTER TABLE "professors_course_course" ADD CONSTRAINT "FK_94f4570a42404ea80c019819861" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_course_course" ADD CONSTRAINT "FK_e559e63c2428f001d70874b8cc8" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_course_course" DROP CONSTRAINT "FK_e559e63c2428f001d70874b8cc8"`);
        await queryRunner.query(`ALTER TABLE "professors_course_course" DROP CONSTRAINT "FK_94f4570a42404ea80c019819861"`);
        await queryRunner.query(`DROP INDEX "IDX_e559e63c2428f001d70874b8cc"`);
        await queryRunner.query(`DROP INDEX "IDX_94f4570a42404ea80c01981986"`);
        await queryRunner.query(`DROP TABLE "professors_course_course"`);
    }

}
