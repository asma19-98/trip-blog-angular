import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../Models/Blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  @Input()  Blogchild !:Blog;
  @Output() responseEmitter = new EventEmitter<Blog>();
// incrementLike(p: Product) {
//   p.like++;
// }
OnLike(){
  this.Blogchild.like = (this.Blogchild.like || 0) + 1;
  this.responseEmitter.emit(this.Blogchild);
  console.log('done!');
  }
}
