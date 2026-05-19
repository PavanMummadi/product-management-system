package com.hospital.billing.controller;

import com.hospital.billing.entity.Bill;
import com.hospital.billing.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bills")
public class BillingController {

    @Autowired
    private BillRepository repository;

    @GetMapping
    public List<Bill> getAllBills() {
        return repository.findAll();
    }

    @PostMapping
    public Bill addBill(@RequestBody Bill bill) {
        return repository.save(bill);
    }

    @DeleteMapping("/{id}")
    public void deleteBill(@PathVariable Long id) {
        repository.deleteById(id);
    }
}