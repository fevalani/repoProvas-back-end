import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1627609660445 implements MigrationInterface {
    name = 'createTables1627609660445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "examUrl" character varying NOT NULL, "professorId" integer, "categoryId" integer, "courseId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_3dcd9199b8cd801383e623c3d11" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_3dcd9199b8cd801383e623c3d11"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "professors"`);
    }

}
