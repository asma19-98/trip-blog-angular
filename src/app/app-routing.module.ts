import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' }, {path:'home',component:HomeComponent},{path:'AddBlog',component:AddBlogComponent},{path:'Blog',component:BlogComponent}
  ,{path:'BlogDetails',component:BlogDetailsComponent},{path:'Destination',component:DestinationComponent},{path:'DestinationDetails',component:DestinationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
