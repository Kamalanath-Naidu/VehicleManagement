package com.kamalanath.vehicleManagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "vehicle_list")
@Data
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    private String make;
    private String model;
    private String year;
    private String vin;

}
