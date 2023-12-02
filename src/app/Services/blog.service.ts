import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../Models/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}
  getBlog() {
    return this.http.get<Blog[]>('http://localhost:3000/Blogs');
  }
  addBlog(p:Blog){
    return this.http.post('http://localhost:3000/Blogs/',p);
  }
  deleteBlog(id:any){
    return this.http.delete('http://localhost:3000/Blogs/',id);
  }
  putBlog(id:any,prod:Blog){
    return this.http.put('http://localhost:3000/Blogs'+'/'+id,prod);

  }
}