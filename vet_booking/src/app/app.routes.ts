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
    path: 'city-zoo-clinic',
    loadComponent: () =>
      import('./pages/city-zoo-clinic/city-zoo-clinic').then((m) => m.CityZooClinic)
  },
  {
    path: 'emergency-pet-clinic',
    loadComponent: () =>
      import('./pages/emergency-pet-clinic/emergency-pet-clinic').then((m) => m.EmergencyPetClinic)
  },
  {
    path: 'happy-path-clinic',
    loadComponent: () =>
      import('./pages/happy-path-clinic/happy-path-clinic').then((m) => m.HappyPathClinic)
  },
  {
    path: 'happy-pets',
    loadComponent: () =>
      import('./pages/happy-pets/happy-pets').then((m) => m.HappyPetsClinic)
  },
  {
    path: 'vet-care-center',
    loadComponent: () =>
      import('./pages/vet-care-center/vet-care-center').then((m) => m.VetCareCenter)
  },

    {
    path: 'all-clinics',
    loadComponent: () =>
      import('./pages/all-clinics/all-clinics').then((m) => m.AllClinics)
   },
  
];
