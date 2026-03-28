import express, { Router } from "express";
import {createEventsController, getAllEventsController} from "../controllers/eventController"
import { validateRequest } from "../middleware/validate";
import { postSchemas} from "../validation/eventValidation";

const eventRouter: Router = express.Router();

eventRouter.get("/events", getAllEventsController);
eventRouter.post("/events", validateRequest(postSchemas.create), createEventsController);



export default eventRouter;