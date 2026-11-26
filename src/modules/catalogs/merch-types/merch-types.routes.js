import express from "express";
import * as merchTypesController from "./merch-types.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createMerchTypeSchema } from "./merch-types.schema.js";

const router = express.Router();

router.get("/:id", merchTypesController.getMerchType);

router.get("/", merchTypesController.listMerchTypes);

router.post(
  "/",
  validate(createMerchTypeSchema),
  merchTypesController.createMerchType,
);

router.put(
  "/:id",
  validate(createMerchTypeSchema),
  merchTypesController.updateMerchType,
);

router.delete("/:id", merchTypesController.deleteMerchType);

export { router };
