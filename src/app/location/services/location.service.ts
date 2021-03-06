
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RESTLocation } from '../interfaces/location.interface';


@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private http:HttpClient) {
  }

  getLocation():Observable<RESTLocation>{
    return this.http.get<RESTLocation>(`${environment.apiUrl}/location`)
  }
}
