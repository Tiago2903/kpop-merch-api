import express from "express";
import * as categoriesController from "./categories.controller.js";

const router = express.Router();

router.get("/:id", categoriesController.getCategory);

export { router };
