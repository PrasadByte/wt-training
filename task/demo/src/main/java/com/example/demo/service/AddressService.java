package com.example.demo.service;





import com.example.demo.entity.Address;

import java.util.List;

public interface AddressService {
    Address createAddress(Address address);
    List<Address> getAllAddresses();
    Address getAddressById(int id);
    void deleteAddress(int id);
}
