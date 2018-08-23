import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login.component';
import { ModuleWithProviders } from '@angular/core';

const loginRouter: Routes = [
    { path: '', component: LoginComponent }
];

export const loginRoutes: ModuleWithProviders = RouterModule.forChild(loginRouter);
//forChild -> Vì router này sẽ được load như một router con