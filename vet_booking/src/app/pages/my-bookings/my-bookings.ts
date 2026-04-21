import { Component } from '@angular/core';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [],
  templateUrl: './my-bookings.html',
  styleUrl: './my-bookings.css',
})
export class MyBookings {
  activeCard: 'total' | 'upcoming' | 'completed' | null = 'upcoming';

  setActiveCard(card: 'total' | 'upcoming' | 'completed') {
  this.activeCard = card;} 

  activeStatus: 'all' | 'pending' | 'accepted' | 'rejected' | null = 'all';
  
  setActiveStatus(status: 'all' | 'pending' | 'accepted' | 'rejected') {
    this.activeStatus = status;
  }


  petIcon(type: string): string {
  const icons: Record<string, string> = {
    dog: '🐶',
    cat: '🐱',
    bird: '🐦',
    rabbit: '🐰',
    other: '🐾'
  };
  return icons[type] ?? '🐾';
}

bookings: Booking[] = [
  {
    id: '1',
    ownerName: 'Sandra',
    clinicName: 'Happy Pets Clinic',
    petName: 'Buddy',
    petType: 'dog',
    date: '2026-04-25',
    time: '10:30',
    reason: 'checkup',
    textArea: 'Annual checkup',
    status: 'accepted'
  },
  {
    id: '2',
    ownerName: 'Sandra',
    clinicName: 'Vet Care Center',
    petName: 'Mimi',
    petType: 'cat',
    date: '2026-04-27',
    time: '14:15',
    reason: 'vaccine',
    textArea: 'Annual vaccine',
    status: 'pending'
  },
  {
    id: '3',
    ownerName: 'Sandra',
    clinicName: 'City Zoo Clinic',
    petName: 'Tweety',
    petType: 'bird',
    date: '2026-03-02',
    time: '09:00',
    reason: 'checkup',
    textArea: 'Beak trim',
    status: 'accepted'
  },
  {
    id: '4',
    ownerName: 'Sandra',
    clinicName: 'Vet Care Center',
    petName: 'Max',
    petType: 'dog',
    date: '2026-05-15',
    time: '11:30',
    reason: 'checkup',
    textArea: 'Dental care',
    status: 'accepted'
  },
  {
  id: '5',
  ownerName: 'Sandra',
  clinicName: 'Happy Pets Clinic',
  petName: 'Buddy',
  petType: 'dog',
  date: '2026-03-15',
  time: '09:30',
  reason: 'grooming',
  textArea: 'Full grooming session',
  status: 'accepted'
}

  
];


get pets(): string[] {
  const names = this.bookings.map(b => b.petName);
  return ['All', ...new Set(names)];
}


activePet: string = 'all';

get filtered(): Booking[] {
  const now = new Date();

  return this.bookings.filter(b => {
    const bookingDate = new Date(`${b.date}T${b.time}`);

    const statusMatch = this.activeStatus === 'all' || b.status === this.activeStatus;
    const petMatch = this.activePet === 'all' || b.petName.toLowerCase() === this.activePet;

    let cardMatch = true;
    if (this.activeCard === 'upcoming') {
      cardMatch = bookingDate >= now;
    } else if (this.activeCard === 'completed') {
      cardMatch = bookingDate < now;
    }

    return statusMatch && petMatch && cardMatch;
  }).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateB.getTime() - dateA.getTime();
  });
}

get totalCount(): number {
  return this.bookings.length;
}

get upcomingCount(): number {
  const now = new Date();
  return this.bookings.filter(b => new Date(`${b.date}T${b.time}`) >= now).length;
}

get completedCount(): number {
  const now = new Date();
  return this.bookings.filter(b => new Date(`${b.date}T${b.time}`) < now).length;
}


onPetChange(event: Event) {
  this.activePet = (event.target as HTMLSelectElement).value;
}


isUpcoming(booking: Booking): boolean {
  return new Date(`${booking.date}T${booking.time}`) >= new Date();
}


selectedBooking: Booking | null = null;

openModal(booking: Booking) {
  this.selectedBooking = booking;
}

closeModal() {
  this.selectedBooking = null;
}








}
