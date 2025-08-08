package com.example.demo.repository;

import com.example.demo.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userreository extends JpaRepository<user,Integer>{
    Optional<user> findByName(String name);
//
//
//    void clearById(int id);
}
