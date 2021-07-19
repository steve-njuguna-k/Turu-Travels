import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { BlogComponent } from './components/blog/blog.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'hotels/hotel-details', component: HotelDetailsComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'tours/tour-details', component: TourDetailsComponent},
  {path: 'featured', component: FavouritesComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  BlogComponent,
  CategoriesComponent,
  ContactComponent,
  HotelsComponent,
  ToursComponent,
  FavouritesComponent,
  HotelDetailsComponent,
  TourDetailsComponent
]