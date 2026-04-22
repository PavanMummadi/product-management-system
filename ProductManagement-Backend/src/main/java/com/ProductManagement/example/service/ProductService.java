package com.ProductManagement.example.service;

import com.ProductManagement.example.entity.Product;
import com.ProductManagement.example.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // 🔥 GET ALL + SEARCH + PAGINATION
    public Page<Product> getAll(String keyword, Pageable pageable) {

        if (keyword != null && !keyword.trim().isEmpty()) {
            return repo.findByNameContainingIgnoreCase(keyword, pageable);
        }

        return repo.findAll(pageable);
    }

    // 🔥 CREATE
    public Product save(Product p) {
        return repo.save(p);
    }

    // 🔥 UPDATE
    public Product update(Long id, Product p) {
        p.setId(id);
        return repo.save(p);
    }

    // 🔥 DELETE
    public void delete(Long id) {
        repo.deleteById(id);
    }

    // 🔥 GET BY ID
    public Product getById(Long id) {
        return repo.findById(id).orElse(null);
    }
}