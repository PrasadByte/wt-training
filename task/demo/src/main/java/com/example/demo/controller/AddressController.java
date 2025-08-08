package com.example.demo.controller;



import com.example.demo.entity.Address;
import com.example.demo.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/addresses")
public class AddressController {
    @Autowired
    private AddressService addressService;
    @PostMapping("/create")
    public Address createAddress(@RequestBody Address address) {
        return addressService.createAddress(address);
    }
    @GetMapping("/all")
    public List<Address> getAllAddresses() {
        return addressService.getAllAddresses();
    }
    @GetMapping("/{id}")
    public Address getAddress(@PathVariable int id) {
        return addressService.getAddressById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAddress(@PathVariable int id) {
        addressService.deleteAddress(id);
    }
}
