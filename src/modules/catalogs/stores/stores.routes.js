import express from "express";
import * as storesController from "./stores.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createStoreSchema } from "./stores.schema.js";

const router = express.Router();

router.get("/:id", storesController.getStore);

router.get("/", storesController.listStores);

router.post(
  "/",
  validate(createStoreSchema),
  storesController.createStore,
);

router.put(
  "/:id",
  validate(createStoreSchema),
  storesController.updateStore,
);

router.delete("/:id", storesController.deleteStore);

export { router };
