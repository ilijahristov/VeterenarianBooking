import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBookings } from './pages/my-bookings/my-bookings'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vet_booking');
}
