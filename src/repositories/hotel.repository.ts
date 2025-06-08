import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dto/hotel.dto";
import logger from "../config/logger.config"
import { ForbiddenError, InternalServerError, NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDto){
    try {
        const hotel = await Hotel.create(hotelData)
        logger.info(`Hotel created successfully: ${hotel.id}`);
        return hotel
    } catch (error) {
        throw new InternalServerError("Error creating hotel at repository level.");
    }
}

export async function getHotelbyId(id: number){
       try {
        const hotel = await Hotel.findByPk(id);
        if(!hotel) {
            logger.warn(`Hotel with id ${id} not found`);
            throw new NotFoundError(`Hotel with id ${id} not found`);
        }
        logger.info(`Hotel found: ${hotel.id}`);
        return hotel
       } catch (error) {
            if(error instanceof NotFoundError) {
                throw error; // rethrowing the NotFoundError to be handled by the controller    
            }
            throw new InternalServerError(`Error fetching hotel with id ${id} at the repository level.`)
        }
    }
export async function getAllHotels(){
    try {
        const hotels = await Hotel.findAll();
        if(hotels.length === 0){
            logger.warn(`No hotels found`);
        }
        logger.info(`Found ${hotels.length} hotels`);
        return hotels
    } catch (error) {
        throw new InternalServerError(`Error fetching all hotels at the repository level.`)
    }
}

export async function deleteHotelById(id: number){
    try {
        const hotelExists = await Hotel.findByPk(id)

        if(!hotelExists){
            logger.warn(`Hotel with ${id} not found`);
            throw new NotFoundError(`Requested hotel to delete with id ${id} not found`);
        }
        
        const isDeleted = await Hotel.destroy({
            where: {
                id: id
            }
        })

        if(isDeleted === 0){
            logger.warn(`Hotel with id ${id} was not deleted`);
            throw new ForbiddenError(`Hotel with id ${id} was not deleted`);
        }

        return isDeleted
    } catch (error) {
        if(error instanceof NotFoundError || error instanceof ForbiddenError) {
            throw error
        }
        throw new InternalServerError(`Error deleting hotel with id ${id} at the repository level.`)
    }
}



