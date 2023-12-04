import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from 'src/app/Models/Place';
import { Destination } from 'src/app/Models/destination.model';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css'],
})
export class DestinationDetailsComponent {

  @Input() Destinationchild!: Destination;
  @Output() deletePlaceEmitter = new EventEmitter<{ destinationId: number, placeId: number }>();
  @Input() selectedPlace!: Place;
 
  delete() {
    if (this.Destinationchild && this.Destinationchild.id && this.selectedPlace && this.selectedPlace.id) {
      const destinationId = this.Destinationchild.id;
      const placeId = this.selectedPlace.id;
      this.deletePlaceEmitter.emit({ destinationId, placeId });
    } else {
      console.error('Invalid destination or destination id or place or place id.');
    }
  }

  stars: number[] = [1, 2, 3, 4, 5];
  isHovered: boolean = false;
  hoverRating: number = 0;

  onStarHover(rating: number) {
    this.isHovered = true;
    this.hoverRating = rating;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
 
}
