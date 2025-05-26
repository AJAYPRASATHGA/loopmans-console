import { Route } from '@angular/router';
import { AuthComponent } from './lib/auth/auth.component';

export const authRoutes: Route[] = [
  { path: '', component: AuthComponent }, // Default route
];
