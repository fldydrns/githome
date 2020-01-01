package jp.co.neosoft.model;

import java.io.Serializable;

public class BaseModel implements Serializable {

    private String company;

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
}
