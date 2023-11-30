import { Attraction } from "./attraction.model";
import { Hotel } from "./hotel.model";
import { Museum } from "./museum.model";
import { Restaurant } from "./restaurants.model";

// Destination model
export class Destination {
  id?: number;
  name?: string;
  nameOfCity?: string;
  hotels?: Hotel[];
  restaurants?: Restaurant[];
  attractions?: Attraction[];
  museums?: Museum[];
}
