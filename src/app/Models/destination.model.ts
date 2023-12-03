
import { Place } from "./Place";
import { Attraction } from "./attraction.model";
import { Hotel } from "./hotel.model";
import { Museum } from "./museum.model";
import { Restaurant } from "./restaurants.model";

// Destination model
export class Destination {
  id: number;
  name: string;
  nameOfCity: string;
  places: Place[];
  // restaurants: Restaurant[];
  // attractions: Attraction[];
  // museums: Museum[];
  // hotels: Hotel[], restaurants: Restaurant[], attractions: Attraction[], museums: Museum[
  constructor(id: number, name: string, nameOfCity: string,places:Place[]) {
    this.id = id;
    this.name = name;
    this.nameOfCity = nameOfCity;
    this.places = places || [];
    // this.hotels = hotels || [];
    // this.restaurants = restaurants || [];
    // this.attractions = attractions || [];
    // this.museums = museums || [];
  }
}
