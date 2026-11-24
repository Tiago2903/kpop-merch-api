import { knex } from "../../../db/knex.js";
import { CategoriesRepository } from "./categories.repository.js";
import { NotFoundError } from "../../../core/errors/NotFoundError.js";

const categoriesRepository = new CategoriesRepository(knex);

export async function getCategory(id) {
  const ret = await categoriesRepository.findById(id);

  if (typeof ret == "undefined") {
    throw new NotFoundError("Categoria não encontrada");
  }

  return ret;
}

export async function listCategories() {
    return await categoriesRepository.findAll()
}

export async function createCategory(data) {
    return await categoriesRepository.create(data);
}

export async function updateCategory(id, data) {
    await getCategory(id);
    return await categoriesRepository.update(id, data);
}

export async function deleteCategory(id) {
    await getCategory(id);
    return await categoriesRepository.softDelete(id);
}