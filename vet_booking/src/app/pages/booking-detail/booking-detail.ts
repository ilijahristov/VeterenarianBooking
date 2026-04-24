// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-booking-detail',
//   standalone: true, 
//   imports: [],
//   templateUrl: './booking-detail.html',
//   styleUrl: './booking-detail.css',
// })
// export class BookingDetail {
  
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Booking } from '../../models/booking.model';
import { DoctorReview} from '../../models/doctor_review.model';
import { Medication } from '../../models/medication.model';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [TitleCasePipe, FooterComponent],
  templateUrl: './booking-detail.html',
  styleUrl: './booking-detail.css',
})
export class BookingDetail implements OnInit {
  booking: Booking | null = null;
  review: DoctorReview | null = null;
  medication: Medication | null = null;

  bookings: Booking[] = [
    {
      id: '1', ownerName: 'Sandra', clinicName: 'Happy Pets Clinic',
      petName: 'Buddy', petType: 'dog', date: '2026-04-25', time: '10:30',
      reason: 'checkup', textArea: 'Annual checkup', status: 'accepted'
    },
    {
      id: '2', ownerName: 'Sandra', clinicName: 'Vet Care Center',
      petName: 'Mimi', petType: 'cat', date: '2026-04-27', time: '14:15',
      reason: 'vaccine', textArea: 'Annual vaccine', status: 'pending'
    },
    {
      id: '3', ownerName: 'Sandra', clinicName: 'City Zoo Clinic',
      petName: 'Tweety', petType: 'bird', date: '2026-03-02', time: '09:00',
      reason: 'checkup', textArea: 'Beak trim', status: 'accepted'
    },
    {
      id: '4', ownerName: 'Sandra', clinicName: 'Vet Care Center',
      petName: 'Max', petType: 'dog', date: '2026-05-15', time: '11:30',
      reason: 'checkup', textArea: 'Dental care', status: 'accepted'
    },
    {
      id: '5', ownerName: 'Sandra', clinicName: 'Happy Pets Clinic',
      petName: 'Buddy', petType: 'dog', date: '2026-03-15', time: '09:30',
      reason: 'grooming', textArea: 'Full grooming session', status: 'accepted'
    }
  ];

  medications: Medication[] = [
    { id: '1', name: 'Feather Oil', image: '🪶', note: '2 drops / Once weekly' },
    { id: '2', name: 'Coat Shine Oil', image: '🧴', note: 'Apply weekly' },
  ];

  reviews: DoctorReview[] = [
    {
      id: '1',
      bookingId: '3',
      clinicName: 'City Zoo Clinic',
      description: 'Tweety is healthy. Beak trimmed successfully.',
      healthScore: 8.5,
      weight: 0.5,
      activity: 'medium',
      medicationId: '1'
    },
    {
      id: '2',
      bookingId: '5',
      clinicName: 'Happy Pets Clinic',
      description: 'Buddy groomed successfully. Coat is shiny and healthy.',
      healthScore: 9.1,
      weight: 24.8,
      activity: 'high',
      medicationId: '2'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.booking = this.bookings.find(b => b.id === id) ?? null;
    this.review = this.reviews.find(r => r.bookingId === id) ?? null;
    if (this.review) {
      this.medication = this.medications.find(m => m.id === this.review!.medicationId) ?? null;
    }
  }

  isUpcoming(): boolean {
    if (!this.booking) return false;
    return new Date(`${this.booking.date}T${this.booking.time}`) >= new Date();
  }

  petIcon(): string {
    const icons: Record<string, string> = {
      dog: '🐶', cat: '🐱', bird: '🐦', rabbit: '🐰', other: '🐾'
    };
    return this.booking ? (icons[this.booking.petType] ?? '🐾') : '🐾';
  }

  countdown(): { days: number, hours: number, minutes: number } {
  if (!this.booking) return { days: 0, hours: 0, minutes: 0 };
  const now = new Date();
  const bookingDate = new Date(`${this.booking.date}T${this.booking.time}`);
  const diff = bookingDate.getTime() - now.getTime();
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  };
}

  printPDF() {
    window.print();
  }


  addMinutes(time: string, minutes: number): string {
  const [hours, mins] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, mins + minutes);
  return date.toTimeString().slice(0, 5);
}


  
}