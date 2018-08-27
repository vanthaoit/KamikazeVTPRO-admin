import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule,Routes} from '@angular/router';
import { HttpProviderService } from '../../core/services/http-provider.service';

export const userRoutes: Routes =[
  //localhost: 4200/main/user
  {path:'',redirectTo:'index',pathMatch:'full'},
  //4200/main/user/index
  {path:'index',component:UserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers:[HttpProviderService]
})
export class UserModule { }
