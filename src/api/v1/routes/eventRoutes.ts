import express, { Router } from "express";
import {createEventsController, getAllEventsController, updateEventController, deleteEventController} from "../controllers/eventController"
import { validateRequest } from "../middleware/validate";
import { postSchemas} from "../validation/eventValidation";
import cors from "cors";
import authenticate from "../middleware/authenticate";
import { setCustomClaims } from "../controllers/eventController";
import isAuthorized from "../middleware/authorize";
const eventRouter: Router = express.Router();

const authenticatedCorsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
    credentials: true,
    methods: ["POST"],
};

// Only admins can set custom claims
eventRouter.post(
    "/setCustomClaims", cors(authenticatedCorsOptions),
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);
eventRouter.get("/events", getAllEventsController);
eventRouter.post("/events", validateRequest(postSchemas.create), createEventsController);
eventRouter.put("/events/:id", updateEventController);
eventRouter.delete("/events/:id", deleteEventController);


export default eventRouter;