import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { MainCategoryComponent } from './components/main-category/mainCategory.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartComponent } from './components/cart/cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductPanelComponent } from './components/admin-panel/product-panel/product-panel.component';
import { MainCategoryPanelComponent } from './components/admin-panel/main-category-panel/main-category-panel.component';
import { CategoryPanelComponent } from './components/admin-panel/category-panel/category-panel.component';
import { UserPanelComponent } from './components/admin-panel/user-panel/user-panel.component';
import { OrderPanelComponent } from './components/admin-panel/order-panel/order-panel.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { MainCategoryAddComponent } from './components/main-category-add/main-category-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    MainCategoryComponent,
    BodyComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoryComponent,
    DiscountPipe,
    FilterPipePipe,
    CartComponent,
    ProductAddComponent,
    PaymentComponent,
    LoginComponent,
    AdminPanelComponent,
    RegisterComponent,
    ProductPanelComponent,
    MainCategoryPanelComponent,
    CategoryPanelComponent,
    UserPanelComponent,
    OrderPanelComponent,
    OrderDetailsComponent,
    CommentsComponent,
    CategoryAddComponent,
    MainCategoryAddComponent,
    ProductUpdateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
