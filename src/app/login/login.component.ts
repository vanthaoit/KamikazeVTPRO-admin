import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { NotificationService } from '../core/services/notification.service';
import { UtilityService } from '../core/services/utility.service';
import { MessageConstants } from '../core/common/message.constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  model: any = {};

  constructor(private _authenticationService: AuthenticationService,
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) { 


  }

  ngOnInit() {
  }

  logIn() {
    this.loading = true;
    this._authenticationService.logIn(this.model.userName, this.model.password).subscribe(result => {
      this._notificationService.displaySuccessMessage(MessageConstants.LOGIN_OK_MSG);
      this.loading = false;
      this._utilityService.navigateToHome();
    }, error => {
      this._notificationService.displayErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });

  }
  displaySuccess(){
    this._notificationService.displayErrorMessage("chúc mừng thông báo thành công !!");
  }
  
}
