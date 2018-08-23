import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
import { AuthenticationService } from '../core/services/authentication.service';
import { UtilityService } from '../core/services/utility.service';
import { loginRoutes } from './login.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    loginRoutes
  ],
  providers: [NotificationService, AuthenticationService, UtilityService],
  declarations: [LoginComponent]
})
export class LoginModule { }
