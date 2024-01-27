import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
if (inject(AuthService).isAuthenticatedUser()) {
    return true;
  } else {
    // Redirect to the login page if the user is not authenticated

    inject(Router).navigate(['/login']);
    return false;
  }
  
  


};

