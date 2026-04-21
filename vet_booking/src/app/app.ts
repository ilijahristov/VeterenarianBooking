import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBookings } from './pages/my-bookings/my-bookings'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  template: '<router-outlet></router-outlet>',
})
export class App {}
