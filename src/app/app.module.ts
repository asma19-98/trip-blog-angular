import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { BlogModule } from './Blogs/blog.module';
import { DestinationModule } from './Destinations/destination.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // BlogComponent,
    // AddBlogComponent,
    // BlogDetailsComponent,
    // DestinationComponent,
    // DestinationDetailsComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BlogModule,
    DestinationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
