import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../../libs/auth/src/auth.module').then((m) => m.AuthModule),
  },
];
