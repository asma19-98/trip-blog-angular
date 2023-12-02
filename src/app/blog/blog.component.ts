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
  incrementLike(p: Blog) {
    p.like++;
  }

}
