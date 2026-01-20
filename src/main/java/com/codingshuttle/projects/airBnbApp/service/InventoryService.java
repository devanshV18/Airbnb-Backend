package com.codingshuttle.projects.airBnbApp.service;

import com.codingshuttle.projects.airBnbApp.entity.Room;

public interface InventoryService {
    void initializeRoomsForAYear(Room room);
    void deleteAllInventories(Room room);
}
