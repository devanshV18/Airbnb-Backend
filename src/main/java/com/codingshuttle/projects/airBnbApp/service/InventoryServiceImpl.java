package com.codingshuttle.projects.airBnbApp.service;

import com.codingshuttle.projects.airBnbApp.entity.Inventory;
import com.codingshuttle.projects.airBnbApp.entity.Room;
import com.codingshuttle.projects.airBnbApp.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
@Slf4j
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService{

    private final InventoryRepository inventoryRepository;

    @Override
    public void initializeRoomsForAYear(Room room) {
        LocalDate today = LocalDate.now();
        LocalDate endDate = LocalDate.now().plusYears(1);

        for(; !today.isAfter(endDate); today = today.plusDays(1)){
            Inventory inventory = Inventory
                    .builder()
                    .hotel(room.getHotel())
                    .room(room)
                    .bookedCount(0)
                    .city(room.getHotel().getCity())
                    .date(today)
                    .price(room.getBasePrice())
                    .surgeFactor(BigDecimal.ONE)
                    .totalCount(room.getTotalCount())
                    .closed(false)
                    .build();
            inventoryRepository.save(inventory);
        }

    }

    @Override
    public void deleteFututreInventories(Room room) {
        LocalDate today = LocalDate.now();
        inventoryRepository.deleteByDateAfterAndRoom(today, room);
    }
}
