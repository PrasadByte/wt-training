package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.user;
import com.example.demo.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/user")
public class Usercontroller {
    @Autowired
    private userservice userservice;

    @PostMapping("/add")
    public user createUser(@RequestBody user user) {
        return userservice.createuser(user);
    }

    @GetMapping("{id}")
    public ResponseEntity<user> getData(@PathVariable int id) {
        user dataById = userservice.getDataById(id);
        return new ResponseEntity<>(dataById, HttpStatus.OK);
    }

    //    @GetMapping("/{name}")
//    public ResponseEntity<user> getUserByName(@PathVariable String name) {
//        return ResponseEntity.ok(userservice.getDataByName(name));
//    }
    @GetMapping("/name/{name}")
    public ResponseEntity<user> getUserByName(@PathVariable String name) {
        return ResponseEntity.ok(userservice.getDataByName(name));
    }

    @GetMapping("/all")
    public ResponseEntity<List<user>> getAllUsers() {
        return ResponseEntity.ok(userservice.getAllUsers());
    }

    @PutMapping("/{id}")
    public ResponseEntity<user> updateUser(@PathVariable int id, @RequestBody user user) {
        user updatedUser = userservice.updateuser(id, user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleData(@PathVariable int id) {
        userservice.delete(id);
        Map<String, Boolean> resp = new HashMap<>();
        resp.put("deleted_successful", true);
        return ResponseEntity.ok(resp);
    }
//    @DeleteMapping("/clear/{id}")
//    public ResponseEntity<user> clear(@PathVariable int id) {
//        userservice.clear(id);
//        user updated = userservice.getDataById(id);
//        return ResponseEntity.ok(updated);
//    }

    @GetMapping("/allDtos")
    public ResponseEntity<List<UserDto>> getAllDtos() {
        List<UserDto> allDto = userservice.getAllDtos();
        return new ResponseEntity<>(allDto, HttpStatus.OK);
    }
}