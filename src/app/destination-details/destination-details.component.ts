import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destination } from '../Models/destination.model';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css'],
})
export class DestinationDetailsComponent {
  @Input() Destinationchild!: Destination;
  @Output() responseEmitter = new EventEmitter<Destination>();

  OnRating() {
    this.responseEmitter.emit(this.Destinationchild);
    console.log('done!');
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
