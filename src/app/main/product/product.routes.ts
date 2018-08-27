import { Routes, RouterModule } from '@angular/router'
import { ProductComponent } from './product.component';
import { ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';

const productRoutes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '', component: ProductComponent }
];
export const ProductRoutes:ModuleWithProviders = RouterModule.forChild(productRoutes);