package com.hospital.appointment.dto;

public class AppointmentResponse {

    private Long id;
    private Object patient;
    private Object doctor;
    private String status;

    public AppointmentResponse(Long id, Object patient, Object doctor, String status) {
        this.id = id;
        this.patient = patient;
        this.doctor = doctor;
        this.status = status;
    }

    public Long getId() { return id; }
    public Object getPatient() { return patient; }
    public Object getDoctor() { return doctor; }
    public String getStatus() { return status; }
}