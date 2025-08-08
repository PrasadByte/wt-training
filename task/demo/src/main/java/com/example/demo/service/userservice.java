package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.user;

import java.util.List;

public interface userservice {
    public user createuser(user user);
    //fetch data from the database using id
    public user getDataById(int id);
    user getDataByName(String name);
    List<user> getAllUsers();

    user updateuser(int id, user user);


        void delete(int id);

  //  void clear(int id);


    List<UserDto> getAllDtos();
}


