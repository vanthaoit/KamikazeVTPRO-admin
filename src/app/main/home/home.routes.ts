import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';

const homeRoutes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent }
];
export const HomeRoutes:ModuleWithProviders = RouterModule.forChild(homeRoutes);