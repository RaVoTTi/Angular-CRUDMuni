import { LocationViewComponent } from './pages/location-view/location-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationTableComponent } from './components/location-table/location-table.component';
import { LocationAddComponent } from './components/location-add/location-add.component';



@NgModule({
  declarations: [
    LocationViewComponent,
    LocationTableComponent,
    LocationAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LocationViewComponent
  ]
})
export class LocationModule { }
