export class Place{
    id: number;
    type: string; // "hotel", "restaurant", "attraction", "museum", etc.
    name: string;
    rating: number;
    blog: string;
    date: string;
    image:string;
    constructor(id: number, name: string, type: string,rating: number,blog:string,date:string,image:string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rating = rating;
        this.blog = blog;
        this.date = date;
        this.image = image;
      
        // this.hotels = hotels || [];
        // this.restaurants = restaurants || [];
        // this.attractions = attractions || [];
        // this.museums = museums || [];
      }
}