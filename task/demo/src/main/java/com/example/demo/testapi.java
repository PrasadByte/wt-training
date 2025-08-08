package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testapi {
    @GetMapping("/test")
    public String get(){
        return "welcome To White Table Technology";
    }
}
