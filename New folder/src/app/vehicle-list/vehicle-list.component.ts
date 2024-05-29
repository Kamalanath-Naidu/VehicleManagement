import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'app/vehicle.model';
import { VehicleService } from 'app/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles!: Vehicle[];
  search: String='';

  constructor(private vehicleService: VehicleService, private router: Router){}


  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  deleteVehicles(id: number){
    this.vehicleService.deleteVehicle(id).subscribe(()=>
      this.ngOnInit()
    );
  }

  filterVehicles(): Vehicle[]{
    return this.vehicles.filter(vehicle=>
      vehicle.make.toLowerCase().includes(this.search.toLowerCase())||vehicle.model.toLowerCase().includes(this.search.toLowerCase())   
    );
  }

  editVehicle(vehicle: Vehicle): void {
    this.router.navigate(['/edit-vehicle', vehicle.id]);
  }

  navigateToVehicleList(){
    this.router.navigate(['/add-vehicle']);
  }

}
