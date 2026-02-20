import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  const payloadBase64 = token.split('.')[1];
  const payloadJson = atob(payloadBase64);
  const payload = JSON.parse(payloadJson);
  if (payload.role !== 'admin') {
    router.navigate(['/error/403']);
    return false;
  }
  return true;
};

