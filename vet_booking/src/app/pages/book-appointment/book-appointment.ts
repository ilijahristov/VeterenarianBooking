import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/book-appointemntService';
import { Router,ActivatedRoute} from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
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
    FooterComponent
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
  clinics: string[] = ['Happy Pets Clinic', 'Vet Care Center', 'City Zoo Clinic', 'Happy Path East', 'Emergency Pet Care'];

  constructor(private fb: FormBuilder, private bookingService: BookingService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      ownerName: ['', Validators.required],
      clinicName: ['', Validators.required],
      petName: ['', Validators.required],
      petType: ['', Validators.required],
      date: [null, Validators.required],
      time: ['', Validators.required],   
      reason: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      status: ['Reserved', Validators.required]
    });

    this.route.queryParamMap.subscribe(params => {
      const reason = params.get('reason');
      if (reason) {
        this.bookingForm.patchValue({ reason });
      }
    });

    this.route.queryParamMap.subscribe(params => {
    const clinicFromUrl = params.get('clinicName');
    if (clinicFromUrl) {
      // Автоматски ја пополнуваме клиниката во формата
      this.bookingForm.patchValue({
        clinicName: clinicFromUrl
      });
    }
  });
  }

  get f() {
  return this.bookingForm.controls;
}



isInvalid(field: string): boolean {
  const control = this.bookingForm.get(field);
  return !!(control && control.touched && control.invalid);
}

getError(field: string): string {
  const control = this.bookingForm.get(field);

  if (!control || !control.touched) return '';

  if (control.hasError('required')) return 'This field is required';
  if (control.hasError('maxlength')) return 'Max 500 characters allowed';

  return '';
}

  onDateChange(newDate: Date | null): void {
    this.selectedTime = ''; 
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
    this.bookingForm.updateValueAndValidity(); 
    }
  }
}