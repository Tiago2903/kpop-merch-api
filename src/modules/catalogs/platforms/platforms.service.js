import { knex } from "../../../db/knex.js";
import { PlatformsRepository } from "./platforms.repository.js";
import { NotFoundError } from "../../../core/errors/NotFoundError.js";

const platformsRepository = new PlatformsRepository(knex);

export async function getPlatform(id) {
  const ret = await platformsRepository.findById(id);

  if (typeof ret == "undefined") {
    throw new NotFoundError("Plataforma não encontrada");
  }

  return ret;
}

export async function listPlatforms() {
    return await platformsRepository.findAll()
}

export async function createPlatform(data) {
    return await platformsRepository.create(data);
}

export async function updatePlatform(id, data) {
    await getPlatform(id);
    return await platformsRepository.update(id, data);
}

export async function deletePlatform(id) {
    await getPlatform(id);
    return await platformsRepository.softDelete(id);
}
