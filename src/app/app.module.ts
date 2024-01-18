import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { DishesComponent } from './home/dishes/dishes.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { IndividualDishComponent } from './home/dishes/individual-dish/individual-dish.component';
import { FormsModule } from '@angular/forms';
import { RestaurantItemComponent } from './home/restaurants/restaurant-item/restaurant-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterComponent,
    DishesComponent,
    RestaurantsComponent,
    FooterComponent,
    IndividualDishComponent,
    RestaurantItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
