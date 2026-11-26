import { knex } from "../../../db/knex.js";
import { MerchTypesRepository } from "./merch-types.repository.js";
import { NotFoundError } from "../../../core/errors/NotFoundError.js";

const merchTypesRepository = new MerchTypesRepository(knex);

export async function getMerchType(id) {
  const ret = await merchTypesRepository.findById(id);

  if (typeof ret == "undefined") {
    throw new NotFoundError("Merch não encontrado");
  }

  return ret;
}

export async function listMerchTypes() {
    return await merchTypesRepository.findAll()
}

export async function createMerchType(data) {
    return await merchTypesRepository.create(data);
}

export async function updateMerchType(id, data) {
    await getMerchType(id);
    return await merchTypesRepository.update(id, data);
}

export async function deleteMerchType(id) {
    await getMerchType(id);
    return await merchTypesRepository.softDelete(id);
}