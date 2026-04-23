import { Routes } from '@angular/router';
import { BookAppointment } from './pages/book-appointment/book-appointment';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing').then((m) => m.LandingComponent)
  },

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
    path: 'booking-detail/:id',
    loadComponent: () =>
      import('./pages/booking-detail/booking-detail').then((m) => m.BookingDetail)
  }


];
