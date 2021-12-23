import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderInformationBarComponent } from './components/header-information-bar/header-information-bar.component';
import { HeaderInformationBarButtonComponent } from './components/header-information-bar-button/header-information-bar-button.component';
import { NewOffersComponent } from './components/new-offers/new-offers.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterInformationBarComponent } from './components/footer-information-bar/footer-information-bar.component';
import { FooterInformationBarButtonComponent } from './components/footer-information-bar-button/footer-information-bar-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PickupFromStoreComponent } from './components/pickup-from-store/pickup-from-store.component';
import { PickupHowWorksComponent } from './components/pickup-how-works/pickup-how-works.component';
import { ExtendedWarrantyComponent } from './components/extended-warranty/extended-warranty.component';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { QuestionComponent } from './components/question/question.component';
import { WarrantyTableComponent } from './components/warranty-table/warranty-table.component';
import { SmartCareComponent } from './components/smart-care/smart-care.component';
import { SmartCareTableComponent } from './components/smart-care-table/smart-care-table.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pickup-from-store', component: PickupFromStoreComponent },
  { path: 'extended-warranty', component: ExtendedWarrantyComponent },
  { path: 'smart-care', component: SmartCareComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SliderComponent,
    HeaderInformationBarComponent,
    HeaderInformationBarButtonComponent,
    NewOffersComponent,
    ProductCardComponent,
    FooterInformationBarComponent,
    FooterInformationBarButtonComponent,
    FooterComponent,
    HomeComponent,
    PickupFromStoreComponent,
    PickupHowWorksComponent,
    ExtendedWarrantyComponent,
    FrequentlyAskedQuestionsComponent,
    QuestionComponent,
    WarrantyTableComponent,
    SmartCareComponent,
    SmartCareTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
