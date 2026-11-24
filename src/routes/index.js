import express from "express";
import { router as categoriesRouter } from "../modules/catalogs/categories/categories.routes.js";
import { validate } from "../core/middlewares/validate.js";

const router = express.Router();

router.use("/categories", categoriesRouter);

export { router };
