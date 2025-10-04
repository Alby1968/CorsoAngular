import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
// import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Injectable, Inject, inject } from '@angular/core';
import { AuthService} from './auth.service';
import { CanActivateChildFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
    // return true;
    const authserv = inject(AuthService);
    const router = inject(Router);
        
    if(authserv.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;

    };
   

   // CanActivateChildFn = (childRoute, state) => {
        //      return (inject(AuthService).isInRoleAdmin());
        //    };
};



       export class CanActivateChild implements CanActivateChild {

        constructor(private authService: AuthService, private router: Router) {}
      
        canActivateChild(
          childRoute: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
        ) {
            const authserv = inject(AuthService);
            const router = inject(Router);
                
            if(authserv.isInRoleAdmin()){
                return true;
            }else{
                return false;
            };
        }
      }