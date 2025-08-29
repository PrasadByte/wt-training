package com.employee.service;

import com.employee.Repositoy.EmployeeRepo;
import com.employee.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl  implements EmployeeService{
    private final EmployeeRepo employeeRepo;

    public EmployeeServiceImpl(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public void createEmployee(Employee emp) {
        employeeRepo.save(emp);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public void UpdateEmployee(Employee emp) {
        employeeRepo.save(emp);
    }

    @Override
    public Optional<Employee> getEmployeeById(int id) {
        return employeeRepo.findById(id);
    }

    @Override
    public Boolean deleteEmployeeById(int id) {
        Optional<Employee> employee = employeeRepo.findById(id);

        if (employee.isPresent()) {
            employeeRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
