package com.example.demo.service;





import com.example.demo.entity.Address;
import com.example.demo.repository.Addressreository;
import com.example.demo.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AddressServiceImpl implements AddressService {
    @Autowired
    private Addressreository addressRepository;
    @Override
    public Address createAddress(Address address) {
        return addressRepository.save(address);
    }
    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }
    @Override
    public Address getAddressById(int id) {
        Optional<Address> address = addressRepository.findById(id);
        return address.orElse(null);
    }

    @Override
    public void deleteAddress(int id) {
        addressRepository.deleteById(id);
    }
}
