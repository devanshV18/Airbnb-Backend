import express from 'express';
import { createHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controller';

const hotelRouter = express.Router()

hotelRouter.post('/', createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);

export default hotelRouter;