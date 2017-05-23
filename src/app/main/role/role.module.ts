import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { UtilityService } from '../../core/services/utility.service';
import { HttpProviderService } from '../../core/services/http-provider.service';
import { NotificationService } from '../../core/services/notification.service';



export const roleRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forChild(roleRoutes)
  ],
  providers: [HttpProviderService, NotificationService,UtilityService],
  declarations: [RoleComponent]
})
export class RoleModule { }
