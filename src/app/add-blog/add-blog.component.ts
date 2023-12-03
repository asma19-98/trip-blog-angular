import { Component } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { NgForm } from '@angular/forms';
import { Blog } from '../Models/Blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  constructor(private _shared: BlogService) {}
  // submit(event: any) {
  //   const newData = event.data;
  //   // Perform create operation using the data service
  //   this._shared.addBlog(newData).subscribe(
  //     (response) => {
  //       console.log('Row inserted successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error inserting row:', error);
  //     }
  //   );
  // }
  submit(form: NgForm) {
    if (form.valid) {
      // Create a Blog object from the form values
      const newBlog: Blog = {
        id: 0,
        title: form.value.title,
        author: form.value.author,
        description: form.value.description,
        date: form.value.date,
        destination: form.value.destination,
        like: 0,
        image: 'assets/images/image_7.jpg',
      };

      this._shared.addBlog(newBlog).subscribe(
        (response) => {
          console.log('Blog added successfully:', response);

          form.resetForm();
        },
        (error) => {
          console.error('Error adding blog:', error);
        }
      );
    }
  }
}
