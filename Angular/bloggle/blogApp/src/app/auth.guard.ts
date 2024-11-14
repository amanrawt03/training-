import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let isAuth!:Boolean;
  isAuth = localStorage.getItem('login') !== null;
  
  if(!isAuth){
    router.navigate(['/login'])
    return false
  }
  return true
};
