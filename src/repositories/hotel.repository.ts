import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dto/hotel.dto";
import logger from "../config/logger.config"
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDto){
    try {
        const hotel = await Hotel.create(hotelData)
        logger.info(`Hotel created successfully: ${hotel.id}`);
        return hotel
    } catch (error) {
        
    }
}

export async function getHotelbyId(id: number){
       const hotel = await Hotel.findByPk(id);
        if(!hotel) {
            logger.warn(`Hotel with id ${id} not found`);
            throw new NotFoundError(`Hotel with id ${id} not found`);
        }
        logger.info(`Hotel found: ${hotel.id}`);
        return hotel
}

