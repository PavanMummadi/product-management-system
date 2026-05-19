package com.hospital.doctor.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        name = "PATIENT-SERVICE",
        fallback = PatientFallback.class
)
public interface PatientClient {

    @GetMapping("/patients/{id}")
    Object getPatient(@PathVariable Long id);
}