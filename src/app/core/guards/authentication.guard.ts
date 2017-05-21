import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UrlConstants } from '../common/url.constants';
import { SystemConstants } from '../common/system.constants';
import { UtilityService } from '../services/utility.service';

@Injectable()

export class AuthenticationGuard implements CanActivate {
    constructor(private _router: Router, private _utility: UtilityService) {

    }
    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
        var hasCurrentUser = localStorage.getItem(SystemConstants.CURRENT_USER);
        if (hasCurrentUser) {
            return true;
        } else {
            this._utility.navigateToLogin({
                queryParams: {
                    returnUrl: routerState.url
                }
            });
            return false;
        }
    }
}