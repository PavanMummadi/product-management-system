package com.hospital.patient.service;

import com.hospital.patient.entity.Patient;
import com.hospital.patient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    private final PatientRepository repository;

    public PatientService(PatientRepository repository) {
        this.repository = repository;
    }

    // CREATE
    public Patient save(Patient patient) {
        return repository.save(patient);
    }
    public Patient updatePatient(Long id, Patient updatedPatient) {

        Patient patient = repository.findById(id).orElseThrow();

        patient.setName(updatedPatient.getName());
        patient.setAge(updatedPatient.getAge());
        patient.setDepartment(updatedPatient.getDepartment());

        return repository.save(patient);
    }

    // GET ALL
    public List<Patient> getAll() {
        return repository.findAll();
    }

    // GET BY ID
    public Patient getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // DELETE
    public void delete(Long id) {
        repository.deleteById(id);
    }

    // SEARCH
    public List<Patient> search(String name, int age, String department) {

        return repository.findByNameAndAgeAndDepartment(
                name,
                age,
                department
        );
    }
}