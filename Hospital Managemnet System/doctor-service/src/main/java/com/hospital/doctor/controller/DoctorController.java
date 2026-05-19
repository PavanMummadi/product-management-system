package com.hospital.doctor.controller;

import com.hospital.doctor.entity.Doctor;
import com.hospital.doctor.service.DoctorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

    private final DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    // ADD DOCTOR
    @PostMapping
    public Doctor create(@RequestBody Doctor doctor) {
        return service.save(doctor);
    }

    // GET ALL DOCTORS
    @GetMapping
    public List<Doctor> getAll() {
        return service.getAll();
    }

    // GET DOCTOR BY ID
    @GetMapping("/{id}")
    public Doctor getById(@PathVariable Long id) {
        return service.getById(id);
    }

    // DELETE DOCTOR
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    // UPDATE DOCTOR
    @PutMapping("/{id}")
    public Doctor update(
            @PathVariable Long id,
            @RequestBody Doctor doctor
    ) {
        return service.update(id, doctor);
    }
}