import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/slider/slider.component';
import { InformationBarComponent } from './components/header-information-bar/header-information-bar.component';
import { InformationBarButtonComponent } from './components/header-information-bar-button/header-information-bar-button.component';
import { NewOffersComponent } from './components/new-offers/new-offers.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterInformationBarComponent } from './components/footer-information-bar/footer-information-bar.component';
import { FooterInformationBarButtonComponent } from './components/footer-information-bar-button/footer-information-bar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SliderComponent,
    InformationBarComponent,
    InformationBarButtonComponent,
    NewOffersComponent,
    ProductCardComponent,
    FooterInformationBarComponent,
    FooterInformationBarButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
