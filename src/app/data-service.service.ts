import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}
  getDestinations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/destinations`);
  }

  getDestinationById(destinationId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/destinations/${destinationId}`);
  }

  searchDestinations(destination: string, city: string, category: string): Observable<any> {
    const url = `${this.baseUrl}/search`; // Replace with the actual endpoint for searching destinations
    const params = { destination, city, category };
    return this.http.get(url, { params });
  }
}
