import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const roleGuard: CanActivateChildFn = (data) => {
  const router = inject(Router);
  const userRoles: string = data.data['roles'];
  if(userRoles !== 'admin'){
    router.navigate(['product']);
    console.log("Access Denied for Users")
    return false;
  }
  console.log("hi Admin");
  return true;
};
