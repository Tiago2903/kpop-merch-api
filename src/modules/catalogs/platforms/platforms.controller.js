import * as platformsService from "./platforms.service.js";

export async function getPlatform(req, res) {
  const reqId = req.params.id;
  const platform = await platformsService.getPlatform(reqId);

  res.status(200).json(platform);
}

export async function listPlatforms(req, res) {
  const platforms = await platformsService.listPlatforms();

  res.status(200).json(platforms);
}

export async function createPlatform(req, res) {
  const ret = await platformsService.createPlatform(req.body);

  res.status(201).json(ret);
}

export async function updatePlatform(req, res) {
  const reqId = req.params.id;
  const ret = await platformsService.updatePlatform(reqId, req.body);

  res.status(200).json(ret);
}

export async function deletePlatform(req, res) {
  const reqId = req.params.id;
  const ret = await platformsService.deletePlatform(reqId);

  res.status(200).json(ret);
}
