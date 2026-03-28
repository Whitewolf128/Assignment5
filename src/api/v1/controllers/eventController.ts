import { Request, Response, NextFunction } from "express";
import { createEvents, getAllEvents} from "../services/eventService";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Event } from "../models/eventModel";

export const getAllEventsController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const events: Event[] = await getAllEvents();
        res.status(200).json(
        {
            "message": "Products Retrieved",
            count: events.length,
            data: events
        })
    } catch (error: unknown) {
        next(error);
    }
};
export const createEventsController = async (req: Request,
    res: Response, next: NextFunction): Promise<void> =>
{
    try
    {
        const {
            name,
            date,
            capacity,
            registrationCount,
            status,
            category,
            createdAt,
            updatedAt
        } = req.body;
 
        const event: Event =
        {
            name,
            date,
            capacity,
            registrationCount,
            status,
            category,
            createdAt,
            updatedAt
        };
 
        const products: Event = await createEvents(event);
 
        res.status(HTTP_STATUS.CREATED).json
        ({  message: "Product created",
            data: products
        });
    }
    catch (error: unknown)
    {
        next(error);
    }
};