import { Route } from '@angular/router';


export const appRoutes: Route[] = [
    {path:'Auth',loadComponent:()=>import('@loopsman/auth').then(auth=>auth.AuthComponent)},
];
