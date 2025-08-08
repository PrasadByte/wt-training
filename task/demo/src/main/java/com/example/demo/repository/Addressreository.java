package com.example.demo.repository;

import com.example.demo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Addressreository extends JpaRepository<Address, Integer> {
}

