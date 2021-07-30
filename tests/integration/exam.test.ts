import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
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
    const exam = createExam();

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(201);
  });

  it("should answer status 400 for any empty param", async () => {
    const exam = createExam();

    const num = Math.random();

    if (num < 0.2) {
      exam.categoryId = null;
    } else if (num < 0.4) {
      exam.courseId = null;
    } else if (num < 0.6) {
      exam.examUrl = " ";
    } else if (num < 0.8) {
      exam.name = " ";
    } else {
      exam.professorId = null;
    }

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(400);
  });

  it("should answer status 401 for unexist category, course or professor", async () => {
    const exam = createExam();
    const num = Math.random();

    if (num < 0.33) {
      exam.categoryId = 1000;
    } else if (num < 0.66) {
      exam.courseId = 1000;
    } else {
      exam.professorId = 1000;
    }

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(401);
  });

  it("should answer status 409 for exists exam", async () => {
    const exam = await insertExam();

    const response = await supertest(app).post("/send/exam").send(exam);

    expect(response.status).toBe(409);
  });
});
