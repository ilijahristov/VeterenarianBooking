import { Routes } from '@angular/router';
import { MyBookings } from './pages/my-bookings/my-bookings';

export const routes: Routes = [
//{
//   path: 'my-bookings',
//   loadComponent: () => import('./pages/my-bookings/my-bookings').then((m) => m.MyBookings)
{ path: 'my-bookings', component: MyBookings }
  
//}
];
