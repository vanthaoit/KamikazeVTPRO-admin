
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutes } from './product.routes';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { UtilityService } from './../../core/services/utility.service';
import { HttpProviderService } from '../../core/services/http-provider.service';
import { NotificationService } from '../../core/services/notification.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutes,
    FormsModule,
    PaginationModule,
    ModalModule
   
  ],
   declarations: [ProductComponent],
  providers: [UtilityService,HttpProviderService,NotificationService]
})
export class ProductModule { }
