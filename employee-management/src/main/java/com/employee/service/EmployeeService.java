package com.employee.service;

import com.employee.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    //create a new employee
    void createEmployee(Employee emp);

    // get all employees
    List<Employee> getAllEmployees();

    // update employee
    void UpdateEmployee(Employee emp);

    // get employee by id
    Optional<Employee> getEmployeeById(int id);

    //delete Employee by id
    Boolean deleteEmployeeById(int id);
}
