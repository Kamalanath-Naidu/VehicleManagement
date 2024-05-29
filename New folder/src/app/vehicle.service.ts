import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/core/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl="http://localhost:8080/api/vehicle"

  constructor(private http: HttpClient) { }

  getVehicles() : Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }
    createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updatevehicle(id: number,vehicle: Vehicle): Observable<Vehicle>{
    return this.http.put<Vehicle>(`${this.apiUrl}/update/${id}`, vehicle);
  }
  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
