package com.hospital.patient.controller;

import com.hospital.patient.entity.Patient;
import com.hospital.patient.service.PatientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/patients")
public class PatientController {

    private final PatientService service;

    public PatientController(PatientService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public Patient create(@RequestBody Patient patient) {
        return service.save(patient);
    }

    // GET ALL
    @GetMapping
    public List<Patient> getAll() {
        return service.getAll();
    }
    @PutMapping("/{id}")
    public Patient updatePatient(
            @PathVariable Long id,
            @RequestBody Patient patient) {

        return service.updatePatient(id, patient);
    }

    // GET BY ID
    @GetMapping("/{id}")
    public Patient getById(@PathVariable Long id) {
        return service.getById(id);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {

        service.delete(id);

        return "Patient Deleted Successfully";
    }

    // SEARCH
    @GetMapping("/search")
    public List<Patient> searchPatients(
            @RequestParam String name,
            @RequestParam int age,
            @RequestParam String department) {

        return service.search(name, age, department);
    }
}