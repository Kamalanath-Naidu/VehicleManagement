package com.kamalanath.vehicleManagement.service;

import com.kamalanath.vehicleManagement.model.Vehicle;
import com.kamalanath.vehicleManagement.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class VehicleService {

    @Autowired
    VehicleRepository vehicleRepository;
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Optional<Vehicle> getVehicleById(long id){
        return vehicleRepository.findById(id);
    }

    public Vehicle saveVehicle(Vehicle vehicle){
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(long id){
        vehicleRepository.deleteById(id);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicleUpdates){
        Vehicle vehicle= vehicleRepository.findById(id).orElseThrow(()-> new RuntimeException("Vehicle not found"));

        vehicle.setMake(vehicleUpdates.getMake());
        vehicle.setYear(vehicleUpdates.getYear());
        vehicle.setModel(vehicleUpdates.getModel());
        vehicle.setVin(vehicleUpdates.getVin());
        return vehicleRepository.save(vehicle);
    }
}
