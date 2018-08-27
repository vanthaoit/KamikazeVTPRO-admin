import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from './authentication.service';
import { SystemConstants } from '../common/system.constants';
import { MessageConstants } from '../common/message.constants';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpProviderService {

  private _header: Headers;
  constructor(private _http: Http, private _notificationService: NotificationService,
    private _authenticationService: AuthenticationService, private _utilityService: UtilityService) {
    this._header = new Headers();
    this._header.append("Content-Type", SystemConstants.HEADER_CONTENT_TYPE_JSON);
  }


  get(uri: string) {
    //this.getHeader();
    return this._http.get(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, { headers: this._header }).map(this.extractData);

  }
  post(uri: string, data?: any) {
    this.getHeader();
    return this._http.post(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, data, { headers: this._header }).map(this.extractData);

  }
  put(uri: string, data?: any) {
    this.getHeader();
    return this._http.put(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri, data, { headers: this._header }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
    this.getHeader();
    return this._http.delete(SystemConstants.URL_LOCAL_HOST_API_ENDPOINT + uri + "/?" + key + "=" + id, { headers: this._header }).map(this.extractData);
  }
  postFile(uri: string, data?: any) {

  }
  private extractData(response: Response) {
    let data = response.json();
    return data || {}
  }
  private getHeader(){
    this._header.delete(SystemConstants.AUTHORIZATION);
    this._header.append(SystemConstants.AUTHORIZATION, SystemConstants.BEARER +" " + this._authenticationService.getLogInUser().access_token);
  }
  handleError(error: any) {
    if (error.status == 401) {

      this._notificationService.displayErrorMessage(MessageConstants.LOGIN_TRY_AGAIN_MSG);
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._utilityService.navigateToLogin();
    } else {
      let errMessage = (error.message) ? error.message : (error.status) ? "$error.status - $error.statusText" : MessageConstants.SYSTEM_ERROR_MSG;
      this._notificationService.displayErrorMessage(errMessage);
      return Observable.throw(errMessage);
    }
  }

}
