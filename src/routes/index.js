import express from "express";
import { router as categoriesRouter } from "../modules/catalogs/categories/categories.routes.js";
import { router as merchType } from "../modules/catalogs/merch-types/merch-types.routes.js";
import { router as platformsRouter } from "../modules/catalogs/platforms/platforms.routes.js";
import { router as storesRouter } from "../modules/catalogs/stores/stores.routes.js";
import { validate } from "../core/middlewares/validate.js";

const router = express.Router();

router.use("/categories", categoriesRouter);
router.use("/merch_type", merchType);
router.use("/platforms", platformsRouter);
router.use("/stores", storesRouter);

export { router };
