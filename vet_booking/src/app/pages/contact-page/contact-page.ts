import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {
  name = '';
  email = '';
  phone = '';
  clinicName = '';
  message = '';
  showToast = signal(false);

  heroBg = 'assets/form-image.avif';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.showToast.set(true);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2800);
  }
}
