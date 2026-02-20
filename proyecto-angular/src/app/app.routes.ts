import { Routes } from '@angular/router';
import { Notfound404Component } from './pages/errors/notfound404/notfound404';
import { Unauthorized401Component } from './pages/errors/unauthorized401/unauthorized401';
import { Error403Component } from './pages/errors/forbidden403/forbidden403';
import { LoginComponent } from './pages/login/login';
import { ProductsComponent } from './pages/products/products';
import { MeComponent } from './pages/me/me';
import { AdminComponent } from './pages/admin/admin';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';
import { ShellComponent } from './layout/shell/shell';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '',
        component: ShellComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent},
            { path: 'products', component: ProductsComponent},
            { path: 'me', component: MeComponent},
            { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
        ]},
    { path: 'error/403', component: Error403Component },
    { path: 'error/401', component: Unauthorized401Component },
    { path: '**', component: Notfound404Component },
];
