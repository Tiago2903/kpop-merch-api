import * as categoriesService from "./categories.service.js";

export async function getCategory(req, res) {
  const reqId = req.params.id;
  const category = await categoriesService.getCategory(reqId);

  res.status(200).json(category);
}

export async function listCategories(req, res) {
  const categories = await categoriesService.listCategories();

  res.status(200).json(categories);
}

export async function createCategory(req, res) {
  const ret = await categoriesService.createCategory(req.body);

  res.status(201).json(ret);
}

export async function updateCategory(req, res) {
  const reqId = req.params.id;
  const ret = await categoriesService.updateCategory(reqId, req.body);

  res.status(200).json(ret);
}

export async function deleteCategory(req, res) {
  const reqId = req.params.id;
  const ret = await categoriesService.deleteCategory(reqId);

  res.status(200).json(ret);
}
