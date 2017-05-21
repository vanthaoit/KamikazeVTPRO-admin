import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from './authentication.service';
import { SystemConstants } from '../common/system.constants';


@Injectable()
export class HttpProviderService {

  constructor(private _http: Http, private _header: Headers,
    private _route: Routes, private _notificationService: NotificationService,
    private _authenticationService: AuthenticationService) { }

  get(uri: string) {
    this.getHeader();
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
  postFile(uri: string,data?:any) {

  }
  private extractData(response: Response) {
    let data = response.json();
    return data || {}
  }
  private getHeader() {
    this._header.delete(SystemConstants.AUTHORIZATION);
    this._header.append(SystemConstants.AUTHORIZATION, SystemConstants.BEARER + this._authenticationService.getLogInUser().access_token);
  }

}
