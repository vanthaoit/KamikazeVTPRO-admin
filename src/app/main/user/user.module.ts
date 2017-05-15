import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {RouterModule,Routes} from '@angular/router';

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
  declarations: [UserComponent]
})
export class UserModule { }
