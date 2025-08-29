package com.employee.controller;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("api/v1/emp")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //    @PostMapping("/add")
//    public ResponseEntity<String> addEmployee(@RequestBody Employee emp) {
//        employeeService.createEmployee(emp);
//        return ResponseEntity
//                .status(HttpStatus.CREATED) // 201 Created
//                .body("Employee added successfully");
//    }
    @PostMapping("/add")
    public ResponseEntity<String> addEmployee(@RequestBody Employee emp) {
        try {
            employeeService.createEmployee(emp);
            log.info("Employee added successfully: {}", emp.getName());
            return ResponseEntity.status(HttpStatus.CREATED).body("Employee added successfully");
        } catch (Exception e) {
            log.error("Error while adding employee: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add employee. Please try again later.");
        }

//    @PostMapping("/add")
//    public String addEmployee(@RequestBody Employee emp) {
//        employeeService.createEmployee(emp);
//        return "Employee added successfully";
//    }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees() {
      try {
            List<Employee> employees = employeeService.getAllEmployees();
          log.info("Successfully fetched {} employees.", employees.size());
            return ResponseEntity.ok(employees);
        } catch (Exception e) {
            log.error("Error while fetching all employees: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
      }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEmp(@PathVariable int id, @RequestBody Employee emp) {
        try {
            employeeService.UpdateEmployee(emp);
            return ResponseEntity.ok("Employee updated successfully");
        } catch (Exception e) {
            log.error("Error while updating employee: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update employee. Please try again later.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmpById(@PathVariable int id) {
        try {
            Optional<Employee> employee = employeeService.getEmployeeById(id);
            if (employee.isPresent()) {
                return ResponseEntity.ok(employee.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            // return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

        } catch (Exception e) {
            log.error("Error while fetching employee by ID: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmpById(@PathVariable int id) {
        try {
            boolean isDeleted = employeeService.deleteEmployeeById(id);

            if (isDeleted) {
                log.info("Employee with ID {} deleted successfully.", id);
                return ResponseEntity.ok("Employee deleted successfully");
            } else {
                log.warn("Employee with ID {} not found.", id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
            }
        } catch (Exception e) {
            log.error("Error while deleting employee with ID {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete employee. Please try again later.");
        }
    }

}