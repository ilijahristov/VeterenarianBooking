import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  error = signal('');
  loading = signal(false);
  showPassword = signal(false);
  showConfirm = signal(false);
  

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    this.loading.set(true);
    this.error.set('');
    this.auth.register(this.name, this.email, this.password).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Signup failed. Please try again.');
        this.loading.set(false);
      }
    });
  }

  get passwordMismatch(): boolean {
    return this.confirmPassword.length > 0 && this.password !== this.confirmPassword;
  }

  get passwordTooShort(): boolean {
    return this.password.length > 0 && this.password.length < 8;
  }

  onSubmit() {
    if (this.passwordMismatch || this.passwordTooShort) return;
    this.signup();
  }

  get isFormValid() {
    return !this.loading() && !this.passwordMismatch && !this.passwordTooShort;
  }

  togglePassword() { this.showPassword.update(v => !v); }
  toggleConfirm() { this.showConfirm.update(v => !v); }
}