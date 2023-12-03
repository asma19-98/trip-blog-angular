import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Blog } from '../Models/Blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor(private http: HttpClient) {}
  getBlog() {
    return this.http.get<Blog[]>('http://localhost:3000/blogs');
  }
  addBlog(p:Blog){
    return this.http.post('http://localhost:3000/blogs/',p);
  }
  deleteBlog(id:any){
    return this.http.delete('http://localhost:3000/blogs/',id);
  }
  putBlog(id:any,blog:Blog){
    return this.http.put('http://localhost:3000/blogs'+'/'+id,blog);
  }
  // incrementLike(id: any, blog: Blog): Observable<any> {
  //      const modifiedBlog: Blog = {
  //     ...blog,
  //     like: (blog.like || 0) + 1, 
  //   };
  //   return this.http.put(`http://localhost:3000/blogs/${id}`, modifiedBlog);
  // }
}