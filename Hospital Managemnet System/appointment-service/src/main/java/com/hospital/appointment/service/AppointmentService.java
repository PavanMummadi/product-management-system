package com.hospital.appointment.service;

import com.hospital.appointment.entity.Appointment;
import com.hospital.appointment.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    // SAVE
    public Appointment save(Appointment appointment) {
        return repository.save(appointment);
    }

    // GET ALL
    public List<Appointment> getAll() {
        return repository.findAll();
    }

    // GET BY ID
    public Appointment getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // DELETE
    public void delete(Long id) {
        repository.deleteById(id);
    }

    // UPDATE
    public Appointment update(Long id, Appointment updatedAppointment) {

        Appointment appointment =
                repository.findById(id).orElse(null);

        if (appointment != null) {

            appointment.setPatientId(
                    updatedAppointment.getPatientId()
            );

            appointment.setDoctorId(
                    updatedAppointment.getDoctorId()
            );

            appointment.setAppointmentDate(
                    updatedAppointment.getAppointmentDate()
            );

            appointment.setStatus(
                    updatedAppointment.getStatus()
            );

            return repository.save(appointment);
        }

        return null;
    }
}