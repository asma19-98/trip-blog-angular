import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> b07e815bd73e380ad665b0ba0cb52f86530c4578
import { Blog } from '../Models/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
<<<<<<< HEAD
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
=======
  
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
  putBlog(id:any,prod:Blog){
    return this.http.put('http://localhost:3000/blgs'+'/'+id,prod);
>>>>>>> b07e815bd73e380ad665b0ba0cb52f86530c4578

  }
}