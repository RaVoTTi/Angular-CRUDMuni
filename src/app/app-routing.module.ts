import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationViewComponent } from './location/pages/location-view/location-view.component';
import { DivisionViewComponent } from './division/pages/division-view/division-view.component';
import { LocationEditComponent } from './location/pages/location-edit/location-edit.component';


const routes: Routes= [
  {
    path: 'location',
    component: LocationViewComponent
  },
  {
    path: 'location/:id',
    component: LocationEditComponent
  },
  {
    path: 'division',
    component: DivisionViewComponent
  },
  {
    path: '**',
    redirectTo:'location'
  }


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
