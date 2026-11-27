import * as storesService from "./stores.service.js";

export async function getStore(req, res) {
  const reqId = req.params.id;
  const store = await storesService.getStore(reqId);

  res.status(200).json(store);
}

export async function listStores(req, res) {
  const stores = await storesService.listStores();

  res.status(200).json(stores);
}

export async function createStore(req, res) {
  const ret = await storesService.createStore(req.body);

  res.status(201).json(ret);
}

export async function updateStore(req, res) {
  const reqId = req.params.id;
  const ret = await storesService.updateStore(reqId, req.body);

  res.status(200).json(ret);
}

export async function deleteStore(req, res) {
  const reqId = req.params.id;
  const ret = await storesService.deleteStore(reqId);

  res.status(200).json(ret);
}
