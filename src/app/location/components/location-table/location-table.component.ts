import { Component, OnInit } from '@angular/core';
import { Location } from '../../interfaces/location.interface';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styles: [
  ]
})
export class LocationTableComponent implements OnInit {
  searchError: Boolean = false;
  locations: Location[] = [];
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocation().subscribe({
      next: (response)=>{
        this.locations = response.locations
      },
      error: ()=>{
        this.searchError = true;
        this.locations = []
      }
    })
  }

}
