import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from './header/shopping-cart/shopping-cart.component';
import { OrderHistoryComponent } from './header/order-history/order-history.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { DishesComponent } from './home/dishes/dishes.component';
import { RestaurantsComponent } from './home/restaurants/restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { IndividualDishComponent } from './home/dishes/individual-dish/individual-dish.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    OrderHistoryComponent,
    HomeComponent,
    FilterComponent,
    DishesComponent,
    RestaurantsComponent,
    FooterComponent,
    IndividualDishComponent
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
