package com.kamalanath.vehicleManagement.repository;

import com.kamalanath.vehicleManagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
