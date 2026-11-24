import * as categoriesService from "./categories.service.js";

export async function getCategory(req, res) {
    const reqId = req.params.id;
    const category = await categoriesService.getCategory(reqId);

    res.status(200).json(category);
}