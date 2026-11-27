import { knex } from "../../../db/knex.js";
import { StoresRepository } from "./stores.repository.js";
import { NotFoundError } from "../../../core/errors/NotFoundError.js";

const storesRepository = new StoresRepository(knex);

export async function getStore(id) {
  const ret = await storesRepository.findById(id);

  if (typeof ret == "undefined") {
    throw new NotFoundError("Loja não encontrada");
  }

  return ret;
}

export async function listStores() {
    return await storesRepository.findAll()
}

export async function createStore(data) {
    return await storesRepository.create(data);
}

export async function updateStore(id, data) {
    await getStore(id);
    return await storesRepository.update(id, data);
}

export async function deleteStore(id) {
    await getStore(id);
    return await storesRepository.softDelete(id);
}
