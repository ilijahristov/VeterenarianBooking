import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Login } from './pages/auth/login/login';
import { Signup } from './pages/auth/signup/signup';
import { LandingComponent } from './pages/landing/landing';
import { BookAppointment } from './pages/book-appointment/book-appointment';
import { MyBookings } from './pages/my-bookings/my-bookings';


// canActivate: [authGuard] for route protection
export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '', component: LandingComponent, canActivate: [authGuard] },
  { path: 'book-appointment', component: BookAppointment, canActivate: [authGuard] },
  { path: 'my-bookings', component: MyBookings, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },

  {
    path: 'my-bookings',
    loadComponent: () =>
      import('./pages/my-bookings/my-bookings').then((m) => m.MyBookings)
  },
  {
    path: 'book-appointment',
    loadComponent: () =>
      import('./pages/book-appointment/book-appointment').then((m) => m.BookAppointment)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login').then((m) => m.Login)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup').then((m) => m.Signup)
  }
];
