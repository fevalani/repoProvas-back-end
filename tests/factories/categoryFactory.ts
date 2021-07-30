import { getRepository } from "typeorm";
import Category from "../../src/entities/Category";

export async function insertCategory() {
  const category = createCategory();

  await getRepository(Category).insert(category);

  return category;
}

export function createCategory() {
  const category = { name: "P1" };
  return category;
}
