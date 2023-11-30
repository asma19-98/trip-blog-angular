import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    // searchText = searchText.toLowerCase();

    return items.filter(item => 
      item.name.toLowerCase().includes(searchText) ||
      item.nameOfCity.toLowerCase().includes(searchText) ||
      (item.hotels && item.hotels.some((hotel: { name: string; }) => hotel.name.toLowerCase().includes(searchText))) ||
      (item.restaurants && item.restaurants.some((restaurant: { name: string; }) => restaurant.name.toLowerCase().includes(searchText))) ||
      (item.attractions && item.attractions.some((attraction: { name: string; }) => attraction.name.toLowerCase().includes(searchText))) ||
      (item.museums && item.museums.some((museum: { name: string; }) => museum.name.toLowerCase().includes(searchText)))
    );
  }
}