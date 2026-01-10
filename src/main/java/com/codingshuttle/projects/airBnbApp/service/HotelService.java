package com.codingshuttle.projects.airBnbApp.service;

import com.codingshuttle.projects.airBnbApp.dto.HotelDto;


public interface HotelService {
    HotelDto createNewHotel(HotelDto hotelDto);

    HotelDto getHotelById(long id);

    HotelDto updateHotelById(Long id, HotelDto hotelDto);
    void deleteHotelById(Long id);
}
