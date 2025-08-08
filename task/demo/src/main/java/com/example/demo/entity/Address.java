package com.example.demo.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String street;
    private String city;
    private String state;
    private String pinCode;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id") // FK in address table
//    private user user;
}
