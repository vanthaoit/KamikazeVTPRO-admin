import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable()
export class UtilityService {

  private _router: Routes;
  constructor(router: Routes) {
    this._router = router;
  }

  navigate(path: string) {

  }
  navigateToHome() {

  }
  navigateToLogin() {

  }
}
