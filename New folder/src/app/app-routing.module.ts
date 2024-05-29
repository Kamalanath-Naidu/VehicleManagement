import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleEntryComponent } from './vehicle-entry/vehicle-entry.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full'},
  { path: 'vehicles', component: VehicleListComponent},
  { path: 'edit-vehicle/:id', component: VehicleEntryComponent },
  { path: 'add-vehicle', component: VehicleEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
