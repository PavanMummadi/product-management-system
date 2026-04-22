package com.ProductManagement.example.repository;

import com.ProductManagement.example.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // 🔥 SEARCH + PAGINATION
    Page<Product> findByNameContainingIgnoreCase(String name, Pageable pageable);

}