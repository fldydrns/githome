package jp.co.neosoft.dao;

import jp.co.neosoft.entity.Employee;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EmployeeDao {

    List<Employee> findAll();

}
