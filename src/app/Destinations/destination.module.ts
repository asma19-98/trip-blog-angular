import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';


const routes: Routes = [
    { path: 'destination', component: DestinationComponent },
  { path: 'destinationdetails', component: DestinationDetailsComponent },
];
@NgModule({
  declarations: [DestinationDetailsComponent,DestinationComponent, HoverHighlightDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class DestinationModule { }
