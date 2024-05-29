package com.kamalanath.vehicleManagement.controller;

import com.kamalanath.vehicleManagement.model.Vehicle;
import com.kamalanath.vehicleManagement.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @GetMapping("/all")
    public List<Vehicle> getAllVehicle(){
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{id}")
    public Optional<Vehicle> getVehicleById(Long id){
        return vehicleService.getVehicleById(id);
    }

    @PostMapping("/addVehicle")
    public Vehicle addVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.saveVehicle(vehicle);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteVehicle(long id){
        vehicleService.deleteVehicle(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Vehicle> updateVehicle(long id, @RequestBody Vehicle vehicleUpdates){
        try{
            Vehicle vehicleUpdated = vehicleService.updateVehicle(id, vehicleUpdates);
            return ResponseEntity.ok(vehicleUpdated);
        }
        catch(RuntimeException e){
            return ResponseEntity.notFound().build();
        }

    }

}
