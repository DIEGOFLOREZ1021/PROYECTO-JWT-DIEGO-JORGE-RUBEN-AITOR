import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { ProductsComponent } from './pages/products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'login' }
];