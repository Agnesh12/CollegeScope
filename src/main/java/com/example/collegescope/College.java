package com.example.collegescope;

import jakarta.persistence.*;

@Entity
@Table(name = "Colleges")
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String location;
    private String description;
    public College() {}

    public College(String Name, String Location, String Description) {
        this.name = Name;
        this.location = Location;
        this.description = Description;
    }

    public void setName(String Name) {
        this.name = Name;
    }
    public void setLocation(String Location) {
        this.location = Location;
    }
    public void setDescription(String Description) {
        this.description = Description;
    }
    public String getName() {
        return name;
    }
    public String getLocation() {
        return location;
    }
    public String getDescription() {
        return description;
    }
    public long getId() {
        return id;
    }

}
