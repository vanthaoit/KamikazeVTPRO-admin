import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RoleComponent } from './role/role.component';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { AuthenticationService } from '../core/services/authentication.service';
import { UtilityService } from '../core/services/utility.service';



@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [UtilityService, AuthenticationService],
  declarations: [MainComponent]
})
export class MainModule { }
