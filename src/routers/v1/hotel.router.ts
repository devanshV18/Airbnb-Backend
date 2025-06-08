import express from 'express';
import { createHotelHandler,deleteHotelByIdHandler,getAllHotelsHandler, getHotelByIdHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router()

hotelRouter.post('/', validateRequestBody(hotelSchema), createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);
hotelRouter.get('/', getAllHotelsHandler)
hotelRouter.delete('/:id', deleteHotelByIdHandler)

export default hotelRouter;