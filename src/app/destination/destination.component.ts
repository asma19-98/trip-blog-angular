import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Destination } from '../Models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  searchText: any;
 destinationList: Destination[] = [];
  filteredList: Destination[] = [];
  name: string = '';
  city: string = '';
  category: string = '';

  constructor(public _shared: DataServiceService) {}
  ngOnInit(): void {
    this._shared.getDestinations().subscribe(
      (res) => {
        console.log(res);
        this.destinationList = res;
      //  this.filteredList = [...this.destinationList]; // Initialize filtered list with all destinations
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  onSearch() {
    this.filteredList = this.destinationList.filter((destination) => {
      return (
        destination?.name?.toLowerCase().includes(this.name.toLowerCase()) ||
        destination?.nameOfCity?.toLowerCase().includes(this.city.toLowerCase()) ||
        (
          this.category === '' ||
          (destination.hotels && destination.hotels.some(hotel => hotel?.name?.toLowerCase().includes(this.category.toLowerCase()))) ||
          (destination.restaurants && destination.restaurants.some(restaurant => restaurant?.name?.toLowerCase().includes(this.category.toLowerCase()))) ||
          (destination.attractions && destination.attractions.some(attraction => attraction?.name?.toLowerCase().includes(this.category.toLowerCase()))) ||
          (destination.museums && destination.museums.some(museum => museum?.name?.toLowerCase().includes(this.category.toLowerCase())))
        )
      );
    });
  }

  // searchDestinations(): void {
  //   this._shared.searchDestinations(this.destination, this.city, this.category)
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //         this.destinationList = res;
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  searchDestinations(name: string, nameofcity: string, category: string): Destination[] {
    // Filter destinations based on the search criteria
    return this.filteredList.filter((destination) => {
      const nameMatch = !name || destination?.name?.toLowerCase().includes(name.toLowerCase());
      const cityMatch = !nameofcity || destination?.nameOfCity?.toLowerCase().includes(nameofcity.toLowerCase());
      const categoryMatch = !category || this.categoryMatch(destination, category);
console.log(this.filteredList);
      return nameMatch && cityMatch && categoryMatch;
    });
  }

  private categoryMatch(destination: Destination, category: string): boolean | undefined {
    switch (category.toLowerCase()) {
      case 'hotels':
        return destination.hotels && destination.hotels.length > 0;
      case 'restaurants':
        return destination.restaurants && destination.restaurants.length > 0;
      case 'attractions':
        return destination.attractions && destination.attractions.length > 0;
      case 'museums':
        return destination.museums && destination.museums.length > 0;
      default:
        return false;
    }
  }
}
