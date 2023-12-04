import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'addblog', component: AddBlogComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogdetails', component: BlogDetailsComponent },
];

@NgModule({
  declarations: [
    BlogComponent,
    AddBlogComponent,
    BlogDetailsComponent,
   
  ],
  imports: [CommonModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(routes)
  ],
})
export class BlogModule {}
