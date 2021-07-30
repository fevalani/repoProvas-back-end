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
  it("should answer status 200", async () => {
    await insertExam();

    const response = await supertest(app).post("/send/exam");

    expect(response.status).toBe(200);
  });

  it("should answer status 400 for empty name", async () => {
    const exam = createExam();
    const num = Math.random();
    console.log(num);
    exam.name = " ";

    const response = await supertest(app).post("/send/exam");

    expect(response.status).toBe(400);
  });

  it("should answer status 401 for unexist category, course or professor", async () => {
    const exam = createExam();

    exam.name = " ";

    const response = await supertest(app).post("/send/exam");

    expect(response.status).toBe(401);
  });
});
