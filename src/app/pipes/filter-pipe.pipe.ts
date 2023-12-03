import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(destination: any, city: any): string {
    if (!destination || !city) return '';
    return `${destination.name} - ${city.name}`;
  }
}