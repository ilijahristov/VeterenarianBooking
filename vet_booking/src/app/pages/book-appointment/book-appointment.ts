import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/book-appointemntService';
import { Router} from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from '../../components/header/header';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.css',
})
export class BookAppointment implements OnInit {
  bookingForm!: FormGroup;
  minDate: Date = new Date(); // ПРОМЕНЕТО: Сега е Date објект
  isSubmitting = false;
  selectedTime: string = '';

  petTypes: string[] = ['Dog', 'Cat', 'Rabbit', 'Hamster', 'Guinea Pig', 'Parrot', 'Turtle', 'Lizard', 'Snake', 'Ferret', 'Fish', 'Other'];
  reasons: string[] = ['General Checkup', 'Vaccination', 'Surgery', 'Dental Care', 'Emergency', 'Grooming', 'Consultation', 'Other'];
  clinics: string[] = ['City Vet Clinic', 'Happy Paws Hospital', 'Central Veterinary Center', 'Animal Care East', 'Emergency Pet Care'];

  constructor(private fb: FormBuilder, private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      ownerName: ['', Validators.required],
      clinicName: ['', Validators.required],
      petName: ['', Validators.required],
      petType: ['', Validators.required],
      date: [null, Validators.required], // ПРОМЕНЕТО: null за почеток
      time: ['', Validators.required],   // ДОДАДЕНО: мора да има време
      reason: ['', Validators.required],
      description: ['', Validators.maxLength(500)], 
      status: ['Reserved', Validators.required]
    });
  }

  // ФУНКЦИЈА ЗА КАЛЕНДАРОТ
  onDateChange(newDate: Date | null): void {
    this.selectedTime = ''; // Ресетирај време ако смени датум
    this.bookingForm.patchValue({ 
      date: newDate,
      time: '' 
    });
  }

  selectTime(time: string): void {
    this.selectedTime = time;
    this.bookingForm.patchValue({ time: time });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.isSubmitting = true; 
      setTimeout(() => {
        this.bookingService.saveAppointment(this.bookingForm.value);
        this.isSubmitting = false;
        this.router.navigate(['/my-bookings']); 
      }, 2000);
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}