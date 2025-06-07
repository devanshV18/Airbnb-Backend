import { NextFunction, Request, Response } from "express"
import { createHotelService, getHotelByIdService } from "../service/hotel.service"
import { InternalServerError, NotFoundError } from "../utils/errors/app.error"

export const createHotelHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelResponse = await createHotelService(req.body)

        res.status(201).json({
            success: true,
            message: "Hotel created successfully",
            data: hotelResponse
        })

    } catch (error) {
        throw new InternalServerError("Error creating hotel");
    }
}

export const getHotelByIdHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelResponse = await getHotelByIdService(Number(req.params.id));

        res.status(200).json({
            success: true,
            message: "Hotel retrieved successfully",
            data: hotelResponse
        });

    } catch (error) {
        throw new NotFoundError(`Hotel with id ${req.params.id} not found`);
    }
}