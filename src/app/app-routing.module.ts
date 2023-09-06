import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './services/auth.guard';
import { roleGuard } from './services/role.guard';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { notCompleteGuard } from './services/not-complete.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'about', component: AboutComponent,canActivate: [authGuard], data: {roles: "admin"}},//data ja japim rolin e userit
  {path: 'product', component: ProductsComponent, children: [{path: 'productpage', component: ProductpageComponent, data: {roles: 'admin'}}], canActivateChild: [roleGuard]},
  {path: 'contact', component: ContactComponent, canDeactivate: [notCompleteGuard]},
  {path:'access-denied', component: AccessDeniedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
