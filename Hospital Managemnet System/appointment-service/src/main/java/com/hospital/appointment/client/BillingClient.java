package com.hospital.appointment.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "BILLING-SERVICE")
public interface BillingClient {

    @PostMapping("/bills")
    Object createBill(@RequestBody Object bill);
}