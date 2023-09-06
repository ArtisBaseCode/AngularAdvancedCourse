import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (data) => {
  // duhet me inject Router per me mujt me ba navigate
  const router = inject(Router);
  const userRole: string = data.data['roles'];// jam tue marr rolin prej data qe i kem si parameter

  if(userRole !== 'admin'){
    router.navigate(['product']);
    console.log("access denied")
    return false;
  }
  // console.log(data.data['roles'])
  return true;
};
