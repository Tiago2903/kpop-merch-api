import express from "express";
import * as categoriesController from "./categories.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createCategorySchema } from "./categories.schema.js";

const router = express.Router();

router.get("/:id", categoriesController.getCategory);

router.get("/", categoriesController.listCategories);

router.post(
  "/",
  validate(createCategorySchema),
  categoriesController.createCategory,
);

router.put(
  "/:id",
  validate(createCategorySchema),
  categoriesController.updateCategory,
);

router.delete("/:id", categoriesController.deleteCategory);

export { router };
