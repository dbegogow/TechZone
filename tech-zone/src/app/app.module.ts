import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { HeaderInformationBarComponent } from './components/home/header-information-bar/header-information-bar.component';
import { HeaderInformationBarButtonComponent } from './components/home/header-information-bar/header-information-bar-button/header-information-bar-button.component';
import { NewOffersComponent } from './components/home/new-offers/new-offers.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterInformationBarComponent } from './components/home/footer-information-bar/footer-information-bar.component';
import { FooterInformationBarButtonComponent } from './components/home/footer-information-bar/footer-information-bar-button/footer-information-bar-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PickupFromStoreComponent } from './components/pickup-from-store/pickup-from-store.component';
import { PickupHowWorksComponent } from './components/pickup-from-store/pickup-how-works/pickup-how-works.component';
import { ExtendedWarrantyComponent } from './components/extended-warranty/extended-warranty.component';
import { FrequentlyAskedQuestionsComponent } from './components/extended-warranty/frequently-asked-questions/frequently-asked-questions.component';
import { WarrantyTableComponent } from './components/extended-warranty/warranty-table/warranty-table.component';
import { SmartCareComponent } from './components/smart-care/smart-care.component';
import { SmartCareTableComponent } from './components/smart-care/smart-care-table/smart-care-table.component';
import { GiftIdeasComponent } from './components/gift-ideas/gift-ideas.component';
import { TransportComponent } from './components/transport/transport.component';
import { TransportTableComponent } from './components/transport/transport-table/transport-table.component';
import { OrderByPhoneComponent } from './components/order-by-phone/order-by-phone.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderByPhoneDiagramComponent } from './components/order-by-phone/order-by-phone-diagram/order-by-phone-diagram.component';
import { StoresTableComponent } from './components/stores-table/stores-table.component';
import { StoreComponent } from './components/stores-table/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FiltersComponent } from './components/products/filters/filters.component';
import { WorkingTimeComponent } from './components/working-time/working-time.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersProcessingComponent } from './components/account/orders-processing/orders-processing.component';
import { NoProductsComponent } from './components/account/orders-processing/no-products/no-products.component';
import { OrdersProcessingProductComponent } from './components/account/orders-processing/orders-processing-product/orders-processing-product.component';
import { FavouriteProductsComponent } from './components/favourite-products/favourite-products.component';
import { FavouriteProductComponent } from './components/favourite-products/favourite-product/favourite-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { CompareProductsComponent } from './components/compare-products/compare-products.component';
import { PersonalDataComponent } from './components/account/personal-data/personal-data.component';
import { DeliveryAddressComponent } from './components/account/delivery-address/delivery-address.component';
import { UpdatePasswordComponent } from './components/account/update-password/update-password.component';
import { QuestionComponent } from './components/extended-warranty/frequently-asked-questions/question/question.component';
import { LoaderComponent } from './components/loader/loader.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pickup-from-store', component: PickupFromStoreComponent },
  { path: 'extended-warranty', component: ExtendedWarrantyComponent },
  { path: 'smart-care', component: SmartCareComponent },
  { path: 'gift-ideas', component: GiftIdeasComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'order-by-phone', component: OrderByPhoneComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'working-time', component: WorkingTimeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'favourites', component: FavouriteProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'compare', component: CompareProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'unprocessed-orders', component: OrdersProcessingComponent },
      { path: 'processed-orders', component: OrdersProcessingComponent },
      { path: 'profile', component: PersonalDataComponent },
      { path: 'delivery-address', component: DeliveryAddressComponent },
      { path: 'update-password', component: UpdatePasswordComponent }
    ]
  },
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
    WarrantyTableComponent,
    SmartCareComponent,
    SmartCareTableComponent,
    GiftIdeasComponent,
    TransportComponent,
    TransportTableComponent,
    LoginComponent,
    RegisterComponent,
    OrderByPhoneComponent,
    OrderByPhoneDiagramComponent,
    StoresTableComponent,
    StoreComponent,
    AboutComponent,
    ProductsComponent,
    FiltersComponent,
    WorkingTimeComponent,
    AccountComponent,
    OrdersProcessingComponent,
    NoProductsComponent,
    OrdersProcessingProductComponent,
    FavouriteProductsComponent,
    FavouriteProductComponent,
    CartComponent,
    CartProductComponent,
    CompareProductsComponent,
    PersonalDataComponent,
    DeliveryAddressComponent,
    UpdatePasswordComponent,
    QuestionComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
