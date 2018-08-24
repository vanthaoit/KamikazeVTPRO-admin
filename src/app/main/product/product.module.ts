
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRouter } from './product.routes';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { UtilityService } from './../../core/services/utility.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRouter,
    FormsModule,
    PaginationModule,
    ModalModule
   
  ],
   declarations: [ProductComponent],
  providers: [UtilityService]
})
export class ProductModule { }
