package com.codingshuttle.projects.airBnbApp.controller;

import com.codingshuttle.projects.airBnbApp.dto.RoomDto;
import com.codingshuttle.projects.airBnbApp.entity.Room;
import com.codingshuttle.projects.airBnbApp.repository.RoomRepository;
import com.codingshuttle.projects.airBnbApp.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/hotels/{hotelId}/rooms")
@RequiredArgsConstructor
public class RoomAdminController {

    private final RoomService roomService;

    @PostMapping
    public ResponseEntity<RoomDto> createNewRoom(@PathVariable Long hotelId, @RequestBody RoomDto roomDto) {
        RoomDto room = roomService.createRoom(hotelId,roomDto);
        return new ResponseEntity<>(room, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<RoomDto>> getAllRoomsInAHotel(@PathVariable Long hotelId) {
        List<RoomDto> rooms = roomService.getAllRoomsInAHotel(hotelId);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<RoomDto> getRoomById(@PathVariable Long roomId) {
        RoomDto roomDto = roomService.getRoomById(roomId);
        return new ResponseEntity<>(roomDto, HttpStatus.OK);
    }

    @DeleteMapping("/{roomId}")
    public ResponseEntity<RoomDto> deleteRoomById(@PathVariable Long roomId) {
        roomService.deleteRoomById(roomId);
        return ResponseEntity.noContent().build();
    }
}

