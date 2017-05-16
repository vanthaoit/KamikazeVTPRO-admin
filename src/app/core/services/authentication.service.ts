import { Injectable } from '@angular/core';
import { LoggedInUser } from '../domain/logged-in.user';
import { SystemConstants } from '../common/system.constants';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {


  constructor(private _http: Http) {

  }

  logIn(userName: string, password: string) {

    let body =
      "userName=" + encodeURIComponent(userName)
      + "password=" + encodeURIComponent(password)
      + "&grant_type=password";
    let headers = new Headers();
    headers.append("Content_type", SystemConstants.HEADER_CONTENT_TYPE_URLENDCODED);
    let options = new RequestOptions({ headers: headers });
    this._http.post(
      SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + SystemConstants.URL_OAUTH, body, options).map((response: Response) => {
        let user: LoggedInUser = response.json();
        if (user && user.access_token) {
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
        }
      });

  }

  logOut() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);

  }

  isAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user)
      return true;
    else
      return false;
  }

  getLogInUser(): LoggedInUser {

    let user: LoggedInUser;

    if (this.isAuthenticated) {
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.access_token, userData.userName, userData.fullName, userData.email, userData.avatar);
      return user;
    } else {
      user = null;
    }

    return user;
  }

}
