package com.codingshuttle.projects.airBnbApp.service;

import com.codingshuttle.projects.airBnbApp.dto.RoomDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RoomService {
    RoomDto createRoom(Long hotelId, RoomDto roomDto);

    List<RoomDto> getAllRoomsInAHotel(Long hotelId);

    RoomDto getRoomById(Long roomId);

    void deleteRoomById(Long roomId);


}
