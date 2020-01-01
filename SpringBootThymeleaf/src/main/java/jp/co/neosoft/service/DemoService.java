package jp.co.neosoft.service;

import jp.co.neosoft.dao.EmployeeDao;
import jp.co.neosoft.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemoService {

    @Autowired
    EmployeeDao employeeDao;

    public List<Employee> findAll() {

        List<Employee> employeeList = employeeDao.findAll();
        return employeeList;
    }



}
