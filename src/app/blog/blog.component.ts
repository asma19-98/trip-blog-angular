import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogService } from '../Services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit{
  constructor(private _shared:BlogService){}
  listBlog:Blog[]=[];
  
  ngOnInit(): void {
    this._shared.getBlog().subscribe((res) => {
      console.log(res);
      this.listBlog = res;
    },
    (err) => {
      console.log(err);
    }
  );
  }
  incrementLikeForBlog(updatedBlog: Blog) {
    const index = this.listBlog.findIndex(blog => blog.id === updatedBlog.id);
    if (index !== -1) {
      this.listBlog[index] = updatedBlog;
      this._shared.putBlog(updatedBlog.id, updatedBlog).subscribe(
        response => {
          console.log('Blog like count updated on the server:', response);
        },
        error => {
          console.error('Error updating blog like count:', error);
        }
      );
    }
  }

}
