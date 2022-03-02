import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
// import { Location } from '../../interfaces/location.interface'
import { Location, locationGeneric } from '../../interfaces/location.interface';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styles: [
  ]
})
export class LocationFormComponent  {

  constructor(private locationService:LocationService) {

  }

  @Input() placeHolders: Location = locationGeneric

}
