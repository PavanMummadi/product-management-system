package com.hospital.billing.service;

import com.hospital.billing.entity.Bill;
import com.hospital.billing.repository.BillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillingService {

    private final BillRepository repository;

    public BillingService(BillRepository repository) {
        this.repository = repository;
    }

    public Bill save(Bill bill) {
        return repository.save(bill);
    }

    public List<Bill> getAll() {
        return repository.findAll();
    }

    public Bill getById(Long id) {
        return repository.findById(id).orElse(null);
    }
}