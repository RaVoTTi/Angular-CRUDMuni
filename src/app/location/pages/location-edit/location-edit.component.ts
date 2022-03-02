import { Component, OnInit } from '@angular/core';
import { locationGeneric , Location} from '../../interfaces/location.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styles: [
  ]
})
export class LocationEditComponent implements OnInit {

  location: Location = locationGeneric;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.location

  }

}
