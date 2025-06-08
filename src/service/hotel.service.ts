import { createHotel,getAllHotels, getHotelbyId } from "../repositories/hotel.repository";
import { createHotelDto } from "../dto/hotel.dto";
import { ForbiddenError } from "../utils/errors/app.error";

// const blockListedAddresses = ["123 Fake St", "456 Nowhere Ave", "789 Kothapur Blvd"];

// export function isAddressBlockListed(address: string): boolean {
//     return blockListedAddresses.includes(address);
// }

export async function createHotelService(hotelData: createHotelDto) {
    // if (isAddressBlockListed(hotelData.address)) {
    //     throw new ForbiddenError("Hotel address is blocklisted.");
    // } //A demo of BL independednt of DB
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelbyId(id);
    return hotel;
}

export async function getAllHotelService(){
    const hotels = await getAllHotels()
    return hotels;
}

