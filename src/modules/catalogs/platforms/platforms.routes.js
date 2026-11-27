import express from "express";
import * as platformsController from "./platforms.controller.js";
import { validate } from "../../../core/middlewares/validate.js";
import { createPlatformSchema } from "./platforms.schema.js";

const router = express.Router();

router.get("/:id", platformsController.getPlatform);

router.get("/", platformsController.listPlatforms);

router.post(
  "/",
  validate(createPlatformSchema),
  platformsController.createPlatform,
);

router.put(
  "/:id",
  validate(createPlatformSchema),
  platformsController.updatePlatform,
);

router.delete("/:id", platformsController.deletePlatform);

export { router };
