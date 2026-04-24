import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Login } from './pages/auth/login/login';
import { Signup } from './pages/auth/signup/signup';
import { LandingComponent } from './pages/landing/landing';
import { BookAppointment } from './pages/book-appointment/book-appointment';
import { MyBookings } from './pages/my-bookings/my-bookings';

import { AllClinics } from './pages/all-clinics/all-clinics';
import { CityZooClinic } from './pages/city-zoo-clinic/city-zoo-clinic';
import { EmergencyPetClinic } from './pages/emergency-pet-clinic/emergency-pet-clinic';
import { HappyPathClinic } from './pages/happy-path-clinic/happy-path-clinic';
import { HappyPetsClinic } from './pages/happy-pets/happy-pets';
import { VetCareCenter } from './pages/vet-care-center/vet-care-center';
import { BookingDetail } from './pages/booking-detail/booking-detail';
import { ContactPage } from './pages/contact-page/contact-page';


// canActivate: [authGuard] for route protection
export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

   { path: '', component: LandingComponent, canActivate: [authGuard] },
   { path: 'book-appointment', component: BookAppointment, canActivate: [authGuard] },
   { path: 'my-bookings', component: MyBookings, canActivate: [authGuard] },
   { path: 'booking-detail/:id', component: BookingDetail, canActivate: [authGuard] },
   { path: 'city-zoo-clinic', component: CityZooClinic, canActivate: [authGuard] },
   { path: 'emergency-pet-clinic', component: EmergencyPetClinic, canActivate: [authGuard] },
   { path: 'happy-path-clinic', component: HappyPathClinic, canActivate: [authGuard] },
   { path: 'happy-pets', component: HappyPetsClinic, canActivate: [authGuard] },
   { path: 'vet-care-center', component: VetCareCenter, canActivate: [authGuard] },
  
   { path: 'booking-detail/:id', component: BookingDetail, canActivate: [authGuard] },
   { path: 'all-clinics', component: AllClinics, canActivate: [authGuard] },
   { path: 'contact', component: ContactPage, canActivate: [authGuard] },


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
  

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login').then((m) => m.Login)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup').then((m) => m.Signup)
  },

  {
    path: 'booking-detail/:id',
    loadComponent: () =>
      import('./pages/booking-detail/booking-detail').then((m) => m.BookingDetail)
  },


  


];
