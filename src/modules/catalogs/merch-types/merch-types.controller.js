import * as merchTypeService from "./merch-types.service.js";

export async function getMerchType(req, res) {
  const reqId = req.params.id;
  const ret = await merchTypeService.getMerchType(reqId);

  res.status(200).json(ret);
}

export async function listMerchTypes(req, res) {
  const ret = await merchTypeService.listMerchTypes();

  res.status(200).json(ret);
}

export async function createMerchType(req, res) {
  const ret = await merchTypeService.createMerchType(req.body);

  res.status(201).json(ret);
}

export async function updateMerchType(req, res) {
  const reqId = req.params.id;
  const ret = await merchTypeService.updateMerchType(reqId, req.body);

  res.status(200).json(ret);
}

export async function deleteMerchType(req, res) {
  const reqId = req.params.id;
  const ret = await merchTypeService.deleteMerchType(reqId);

  res.status(200).json(ret);
}
