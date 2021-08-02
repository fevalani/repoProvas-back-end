import { getRepository } from "typeorm";
import Category from "../entities/Category";

export async function getCategories() {
  const categorie = await getRepository(Category).find();
  return categorie;
}
