package com.hospital.doctor.client;

import org.springframework.stereotype.Component;

@Component
public class PatientFallback implements PatientClient {

    @Override
    public Object getPatient(Long id) {

        return "Patient Service is temporarily DOWN!";
    }
}