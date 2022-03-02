import { LocationViewComponent } from './pages/location-view/location-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTableComponent } from './components/location-table/location-table.component';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationEditComponent } from './pages/location-edit/location-edit.component';



@NgModule({
  declarations: [
    LocationViewComponent,
    LocationTableComponent,
    LocationFormComponent,
    LocationEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports:[
    LocationViewComponent
  ]
})
export class LocationModule { }
