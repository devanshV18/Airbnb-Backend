package com.codingshuttle.projects.airBnbApp.strategy;

import com.codingshuttle.projects.airBnbApp.entity.Inventory;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@RequiredArgsConstructor
public class SurgePricingStrategy implements PricingStrategy {


    private final PricingStrategy baseWrapped;

    @Override
    public BigDecimal calculatePrice(Inventory inventory) {
        BigDecimal price = baseWrapped.calculatePrice(inventory);
        return price.multiply(inventory.getSurgeFactor());
    }
}
