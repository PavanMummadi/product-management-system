package com.hospital.doctor.service;

import com.hospital.doctor.entity.Doctor;
import com.hospital.doctor.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    private final DoctorRepository repository;

    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
    }

    // SAVE DOCTOR
    public Doctor save(Doctor doctor) {
        return repository.save(doctor);
    }

    // GET ALL
    public List<Doctor> getAll() {
        return repository.findAll();
    }

    // GET BY ID
    public Doctor getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // DELETE
    public void delete(Long id) {
        repository.deleteById(id);
    }

    // UPDATE
    public Doctor update(Long id, Doctor updatedDoctor) {

        Doctor doctor = repository.findById(id).orElse(null);

        if (doctor != null) {

            doctor.setName(updatedDoctor.getName());
            doctor.setSpecialization(updatedDoctor.getSpecialization());
            doctor.setDepartment(updatedDoctor.getDepartment());

            return repository.save(doctor);
        }

        return null;
    }
}