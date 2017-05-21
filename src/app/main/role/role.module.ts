import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes,RouterModule } from '@angular/router';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

export const roleRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(roleRoutes)
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
