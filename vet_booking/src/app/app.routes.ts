import { Routes } from '@angular/router';
import { BookAppointment } from './pages/book-appointment/book-appointment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing').then((m) => m.LandingComponent)
  }
];
