package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.user;
import com.example.demo.repository.userreository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class serviceimpl implements userservice {

    @Autowired
    private userreository userreository;

    @Autowired

    private ModelMapper  mapper;


    @Override
    public user createuser(user user) {

        return userreository.save(user);
    }

    @Override
    public user getDataById(int id) {
        user user1 = userreository.findById(id).orElseThrow(() -> new EntityNotFoundException("user not found" + id));

        return user1;
    }

    @Override
    public user getDataByName(String name) {
        user user2 = userreository.findByName(name).orElseThrow(() -> new EntityNotFoundException("user not found" + name));
        return user2;
    }

    @Override
    public List<user> getAllUsers() {
        return userreository.findAll();
    }


    @Override
    public user updateuser(int id, user user) {
        user updateuser = userreository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        updateuser.setName(user.getName());
        updateuser.setEmail(user.getEmail());
        updateuser.setNumber(user.getNumber());

        return userreository.save(updateuser);
    }

    @Override
    public void delete(int id) {

        userreository.deleteById(id);
    }

//    @Override
//    public void clear(int id) {
//        userreository.clearById(id);
//
//    }

    @Override
    public List<UserDto> getAllDtos() {
        List<user> userDetails = userreository.findAll();

        List<UserDto> listDto = userDetails.stream()
                .map(user -> mapper.map(user, UserDto.class))
                .toList();

        return listDto;
    }

}



