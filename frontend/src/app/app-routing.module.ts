import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { MainCategoryAddComponent } from './components/main-category-add/main-category-add.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ProductPanelComponent } from './components/admin-panel/product-panel/product-panel.component';
import { MainCategoryPanelComponent } from './components/admin-panel/main-category-panel/main-category-panel.component';
import { CategoryPanelComponent } from './components/admin-panel/category-panel/category-panel.component';
import { OrderPanelComponent } from './components/admin-panel/order-panel/order-panel.component';
import { UserPanelComponent } from './components/admin-panel/user-panel/user-panel.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: BodyComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/discounted", component: ProductsComponent },
  { path: "products/category/:id", component: ProductsComponent },
  { path: "products/category/:id/productdetails/:productid", component: ProductDetailsComponent },
  { path: "products/productdetails/:id", component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "cart/payment", component: PaymentComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [LoginGuard] },
  // Admin route section
  { path: "adminpanel", component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: "product-panel", component: ProductPanelComponent, canActivate: [AdminGuard] },
  { path: "product-panel/products/add", component: ProductAddComponent, canActivate: [AdminGuard] },
  { path: "product-panel/products/update/:id", component: ProductUpdateComponent, canActivate: [AdminGuard] },
  { path: "maincategory-panel", component: MainCategoryPanelComponent, canActivate: [AdminGuard] },
  { path: "maincategories/add", component: MainCategoryAddComponent, canActivate: [AdminGuard] },
  { path: "category-panel", component: CategoryPanelComponent, canActivate: [AdminGuard] },
  { path: "categories/add", component: CategoryAddComponent, canActivate: [AdminGuard] },
  { path: "order-panel", component: OrderPanelComponent, canActivate: [AdminGuard] },
  { path: "order-panel/orderdetails/:id", component: OrderDetailsComponent, canActivate: [AdminGuard] },
  { path: "user-panel", component: UserPanelComponent, canActivate: [AdminGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
