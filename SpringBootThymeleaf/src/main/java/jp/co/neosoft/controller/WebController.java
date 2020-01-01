package jp.co.neosoft.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.sun.jndi.ldap.ext.StartTlsResponseImpl;
import jp.co.neosoft.entity.Employee;
import jp.co.neosoft.service.DemoService;
import org.apache.tomcat.util.http.parser.MediaTypeCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.Serializable;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import static org.springframework.http.MediaType.*;

@Controller
@RequestMapping(value = "/A001")
public class WebController {

    @Autowired
    DemoService demoService;

    @RequestMapping(value = "/index")
    public String index() {
        return "index";
    }

    @ModelAttribute
    Employee setUpForm() {
        return new Employee();
    }

    @RequestMapping(value = "/input")
    public String getDemo(Model model) {
        //model.addAttribute("txtName", "入力あり");
//        model.addAttribute("employee",new Employee());
//        List<Employee> employeeList = demoService.findAll();

        return "demo/input";
    }

    @RequestMapping(value = "/save", produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    @ResponseBody
    public String save(@RequestBody Employee employee) {

        Employee emp = new Employee();
        emp.setTeam("ACMilan");
        emp.setPosition("Midfield");

        Gson gson = new Gson();

        String json = gson.toJson(emp);
        return json;
//        return employee;
    }

    @RequestMapping(value = "/gridView", produces = APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    @ResponseBody
    public List<Employee> displayGrid() {

//        Gson gson = new Gson();
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        List<Employee> clubList = demoService.findAll();

        int total = clubList.size();

        JQGridDTO<Employee> jqGridData = new JQGridDTO<Employee>();
//        jqGridData.setPage(1);
//        jqGridData.setTotal("3");
//        jqGridData.setRecords("10");
        jqGridData.setRows(clubList);
        Map<String, Object> map = new HashMap<>();
        map.put("datalist", clubList);

//        String json = gson.toJson(clubList);
//        return json;
        return clubList;
    }

    public class JQGridDTO < T extends Serializable> {

        private int page;

        private String total;

        private String records;

        private List<T> rows;

        public int getPage() {
            return page;
        }

        public void setPage(int page) {
            this.page = page;
        }

        public String getTotal() {
            return total;
        }

        public void setTotal(String total) {
            this.total = total;
        }

        public String getRecords() {
            return records;
        }

        public void setRecords(String records) {
            this.records = records;
        }

        public List<T> getRows() {
            return rows;
        }

        public void setRows(List<T> rows) {
            this.rows = rows;
        }

    }
}
