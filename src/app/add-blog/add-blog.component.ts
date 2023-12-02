import { Component } from '@angular/core';
import { BlogService } from '../Services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  constructor (private _shared:BlogService){
    
  }
  submit(event: any) {
    const newData = event.data;
    // Perform create operation using the data service
    this._shared.addBlog(newData).subscribe(
      (response) => {
        console.log('Row inserted successfully:', response);
      },
      (error) => {
        console.error('Error inserting row:', error);
      }
    );
  }
}
