import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from '../Models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationServiceService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getDestinations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/destinations`);
  }

  getDestinationById(destinationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/destinations/${destinationId}`);
  }

  searchDestinations(
    destination: string,
    city: string,
    category: string
  ): Observable<any> {
    const url = `${this.baseUrl}/search`; // Replace with the actual endpoint for searching destinations
    const params = { destination, city, category };
    return this.http.get(url, { params });
  }
  addDestination(p: Destination) {
    return this.http.post('http://localhost:3000/Destinations/', p);
  }
  deleteDestination(id: any) {
    return this.http.delete('http://localhost:3000/Destinations/' + id);
  }
  putDestination(id: any, dest: Destination) {
    return this.http.put('http://localhost:3000/destinations' + '/' + id, dest);
  }
  deletePlace(destinationId: number, placeId: number) {
    // const url = `http://localhost:3000/destinations/`+destinationId+`/places/`+placeId;
    return this.http.delete('http://localhost:3000/Destinations/' +destinationId+'/places/'+placeId);
  }
  
}
