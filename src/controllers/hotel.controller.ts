import { NextFunction, Request, Response } from "express"
import { createHotelService, deleteHotelByIdService, getAllHotelService, getHotelByIdService } from "../service/hotel.service"
import { InternalServerError } from "../utils/errors/app.error"
import logger from "../config/logger.config"
import { StatusCodes } from "http-status-codes"
import { STATUS_CODES } from "http"

export const createHotelHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelResponse = await createHotelService(req.body)

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Hotel created successfully",
            data: hotelResponse
        })

        logger.info(`Hotel created successfully: ${hotelResponse.id}`)

    } catch (error) {
        throw new InternalServerError("Error creating hotel at controller level");
    }
}

export const getHotelByIdHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelResponse = await getHotelByIdService(Number(req.params.id));

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Hotel retrieved successfully",
            data: hotelResponse
        });

    } catch (error) {
        next(error)
    }
}

export const getAllHotelsHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotelsResponse = await getAllHotelService()
        res.status(StatusCodes.OK).json({
            success: true,
            message: `${hotelsResponse.length} hotels retrieved successfully`,
            data: hotelsResponse
        })
    } catch (error) {
        next(error)
    }
}

export const deleteHotelByIdHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const hotel = await getHotelByIdService(Number(req.params.id));
        const isDeleted = await deleteHotelByIdService(Number(req.params.id));

        res.status(StatusCodes.OK).json({
            success: true,
            message: `Hotel with id ${req.params.id} deleted successfully`,
            data: hotel,
            Deleted: isDeleted
        })

    } catch (error) {
        next(error)
    }
}

