import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { BlogComponent } from './components/blog/blog.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToursComponent,
    HotelsComponent,
    ContactComponent,
    FavouritesComponent,
    BlogComponent,
    TourDetailsComponent,
    HotelDetailsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'contact-us', component: ContactComponent},
      {path: 'hotels', component: HotelsComponent},
      {path: 'tours', component: ToursComponent},
      {path: 'featured', component: FavouritesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
