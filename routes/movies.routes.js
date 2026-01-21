import express from "express";
import * as moviesController from "../controllers/movies.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { authnticateAdmin } from "../middlewares/admin.middleware.js";

const router = express.Router();

router.get(`/`, asyncHandler(moviesController.getMovies));

router.get(`/:id`, asyncHandler(moviesController.getMovie));

router.post(
  "/",
  authenticateUser,
  asyncHandler(authnticateAdmin),
  asyncHandler(moviesController.createMovie)
);

router.put(
  `/:id`,
  authenticateUser,
  asyncHandler(authnticateAdmin),
  asyncHandler(moviesController.updateMovie)
);

router.delete(
  `/:id`,
  authenticateUser,
  asyncHandler(authnticateAdmin),
  asyncHandler(moviesController.deleteMovie)
);

export default router;
