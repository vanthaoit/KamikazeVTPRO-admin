import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { UtilityService } from '../core/services/utility.service';

export const loginRoutes: Routes = [
  //localhost:4200/login
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  providers: [NotificationService, AuthenticationService, UtilityService],
  declarations: [LoginComponent]
})
export class LoginModule { }
