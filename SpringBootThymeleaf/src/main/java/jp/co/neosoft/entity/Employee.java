package jp.co.neosoft.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jp.co.neosoft.model.BaseModel;

import java.io.Serializable;

public class Employee extends BaseModel implements Serializable {

    private static final long serialVersionUID = -3624426852181179322L;

    private String id;
    private String name;
    private String team;
    private int no;
    private String position;
    private String Nationality;
    private String Birth;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getTeam() {
        return team;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getNationality() {
        return Nationality;
    }

    public void setNationality(String nationality) {
        Nationality = nationality;
    }

    public String getBirth() {
        return Birth;
    }

    public void setBirth(String birth) {
        Birth = birth;
    }
}
