import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from '../src/auth.routes'; // Import routes

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes), // Load child routes
  ],
  exports: [RouterModule], // Important for lazy loading
})
export class AuthModule {}
