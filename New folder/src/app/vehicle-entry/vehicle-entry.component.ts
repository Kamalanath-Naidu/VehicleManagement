import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'app/vehicle.model';
import { VehicleService } from 'app/vehicle.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css']
})
export class VehicleEntryComponent implements OnInit {

  vehicleForm!: FormGroup;
  vehicleId!: number;

  //Using activatedRoute becasue we need to read and assgin th id variable; route will work but break Ui here.
  constructor(private fb: FormBuilder, private vehicleService: VehicleService, private route: ActivatedRoute){
    this.vehicleForm=this.fb.group({
      make:['',Validators.required],
      model:['',Validators.required],
      year:['',Validators.required,Validators.min(1900),Validators.max(new Date().getFullYear())],
      vin:['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.vehicleId = params['id'];
      if(this.vehicleId){
        this.vehicleService.getVehicle(this.vehicleId).subscribe(vehicle=>{
          this.vehicleForm.patchValue(vehicle);
        });
      }
    });    
  }

  onSubmit():void{
    if(this.vehicleForm.valid){
      const vehicle: Vehicle = this.vehicleForm.value;
      if(this.vehicleId){
        this.vehicleService.updatevehicle(this.vehicleId,vehicle).subscribe(response=>{
          console.log("Vechile updated", response);
          this.vehicleForm.reset();
        });
      }
      else{
      this.vehicleService.createVehicle(vehicle).subscribe (response=>{
        console.log("Vechile added", response);
        this.vehicleForm.reset();
      });
    }
    }
  }




}
