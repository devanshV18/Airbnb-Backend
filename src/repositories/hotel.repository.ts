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
        const hotels = await Hotel.findAll({
            where: {
                deletedAt: null 
            }
        });
        if(hotels.length === 0){
            logger.warn(`No hotels found`);
        }
        logger.info(`Found ${hotels.length} hotels`);
        return hotels
    } catch (error) {
        throw new InternalServerError(`Error fetching all hotels at the repository level.`)
    }
}

export async function softDeleteHotelById(id: number){
    try {
        const hotel = await Hotel.findByPk(id)

        if(!hotel){
            logger.warn(`Hotel with id ${id} not found for deletion`);
            throw new NotFoundError(`Hotel requested to be deleted with id ${id} not found`);
        }

        hotel.deletedAt = new Date(); //updates the ts obj
        await hotel.save(); //propogates the changes to db.
        logger.info(`Hotel with id ${id} soft deleted successfully`);
        return true
    } catch (error) {
        if(error instanceof NotFoundError) {
            throw error; // rethrowing the NotFoundError to be handled by the controller    
        }
        throw new InternalServerError(`Error soft deleting hotel with id ${id} at the repository level.`)
    }
}



