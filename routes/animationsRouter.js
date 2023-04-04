// express importieren
import express from "express";

import {
  deleteAnimationsController,
  getAllAnimationsController,
  postAnimationsController,
  updateAnimationsController,
} from "../controllers/animationsControllers.js";

// eine Router-Instanz aus "express.Router()" erstellen

const animationsRouter = express.Router();

//
import {
  showTimeMiddleware,
  hostGrabberMiddleware,
} from "../middlewares/animationsMiddlewares.js";

//moviesRouter.use(showTimeMiddleware);
animationsRouter.use(hostGrabberMiddleware);

//
animationsRouter.get("/", getAllAnimationsController);

animationsRouter.post("/", postAnimationsController);

animationsRouter.put("/", updateAnimationsController);

animationsRouter.delete("/:moviesId", deleteAnimationsController);

export default animationsRouter;
