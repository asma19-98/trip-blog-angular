import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Models/Place';
import { Destination } from 'src/app/Models/destination.model';
import { DestinationServiceService } from 'src/app/Services/destination-service.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  searchText: any;
  destinationList: Destination[] = [];
  destinationName: string = '';
  cityName: string = '';
  selectedPlaceType: string = '';
  selectedDestination: any;
  filteredDestinations: Destination[] = [];

  constructor(public _shared: DestinationServiceService) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._shared.getDestinations().subscribe(
      (res) => {
        console.log(res);
        this.destinationList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchDestinations() {
    this.filteredDestinations = this.destinationList
      .filter(destination =>
        destination.name.toLowerCase().includes(this.destinationName.toLowerCase()) &&
        destination.nameOfCity.toLowerCase().includes(this.cityName.toLowerCase())
      )
      .map(destination => ({
        ...destination,
        places: this.filterPlaces(destination.places)
      }))
      .filter(destination => destination.places.length > 0);
      console.log(this.selectedPlaceType);
      console.log('Filtered Destinations:', this.filteredDestinations);
  }
  private filterPlaces(places: Place[]): Place[] {
    if (!this.selectedPlaceType) {
      return places; // No type selected, include all places
    }
  
    return places.filter(place => place.type === this.selectedPlaceType);
  }

  onDeletePlace(event: { destinationId: number, placeId: number }) {
    const { destinationId, placeId } = event;
    this._shared.deletePlace(destinationId, placeId).subscribe(
      () => {
        console.log('Place deleted successfully.');
        this.loadData(); // Refresh the data after deletion
      },
      (error) => {
        console.error('Error deleting place:', error);
      }
    );
  }
}

