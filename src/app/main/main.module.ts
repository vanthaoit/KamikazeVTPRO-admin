import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, RoleComponent]
})
export class MainModule { }
