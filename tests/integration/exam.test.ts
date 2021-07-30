import supertest from "supertest";
import { getConnection, getRepository } from "typeorm";

import app, { init } from "../../src/app";
import Category from "../../src/entities/Category";
import Course from "../../src/entities/Course";
import Professors from "../../src/entities/Professors";
import { createExam, insertExam } from "../factories/examFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /send/exam", () => {
  it("should answer status 201", async () => {
    const exam = await createExam();

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(201);
  });

  it("should answer status 400 for any empty examUrl", async () => {
    const exam = await createExam();
    exam.examUrl = " ";

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 400 for any empty category", async () => {
    const exam = await createExam();
    exam.categoryId = null;

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 400 for any empty professor", async () => {
    const exam = await createExam();
    exam.professorId = null;

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 400 for any empty course", async () => {
    const exam = await createExam();
    exam.courseId = null;

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 400 for any empty name", async () => {
    const exam = await createExam();
    exam.name = " ";

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 401 for unexist category", async () => {
    const exam = await createExam();

    await getRepository(Category).delete({});

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(401);
  });

  it("should answer status 401 for unexist course", async () => {
    const exam = await createExam();

    await getRepository(Course).delete({});

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(401);
  });

  it("should answer status 401 for unexist professor", async () => {
    const exam = await createExam();

    await getRepository(Professors).delete({});

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(401);
  });

  it("should answer status 409 for exists exam", async () => {
    const exam = await insertExam();
    const newBody = {
      name: exam.name,
      categoryId: exam.categoryId,
      courseId: exam.courseId,
      examUrl: exam.examUrl,
      professorId: exam.professorId,
    };

    const response = await supertest(app).post("/send/exam").send(newBody);

    expect(response.status).toBe(409);
  });
});
