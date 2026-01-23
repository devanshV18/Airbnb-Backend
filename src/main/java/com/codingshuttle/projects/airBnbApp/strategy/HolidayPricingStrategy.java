package com.codingshuttle.projects.airBnbApp.strategy;

import com.codingshuttle.projects.airBnbApp.entity.Inventory;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@RequiredArgsConstructor
public class HolidayPricingStrategy implements PricingStrategy{


    private final PricingStrategy urgencyWrapped;

    @Override
    public BigDecimal calculatePrice(Inventory inventory) {
        BigDecimal price = urgencyWrapped.calculatePrice(inventory);
        boolean isTodayHoliday = true; //call an api or check with local data to determine holiday.
        if(isTodayHoliday){
            price = price.multiply(BigDecimal.valueOf(1.25));
        }
        return price;
    }
}
