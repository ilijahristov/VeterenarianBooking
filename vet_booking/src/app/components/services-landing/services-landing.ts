import { Component } from '@angular/core';

@Component({
  selector: 'app-services-landing',
  standalone: true,
  templateUrl: './services-landing.html',
  styleUrl: './services-landing.css'
})
export class ServicesLandingComponent {
  heroBg = '/assets/services.webp';

  private randomGradient(): string {
    const angle = Math.floor(Math.random() * 60) + 110;
    const hue1 = Math.floor(Math.random() * 40) + 270;
    const hue2 = Math.floor(Math.random() * 30) + 300;
    const hue3 = Math.floor(Math.random() * 20) + 0;
    const s1 = Math.floor(Math.random() * 20) + 60;
    const s2 = Math.floor(Math.random() * 20) + 55;
    const s3 = Math.floor(Math.random() * 15) + 65;
    const l1 = Math.floor(Math.random() * 10) + 12;
    const l2 = Math.floor(Math.random() * 10) + 22;
    const l3 = Math.floor(Math.random() * 10) + 32;
    return `linear-gradient(${angle}deg, hsl(${hue1},${s1}%,${l1}%) 0%, hsl(${hue2},${s2}%,${l2}%) 50%, hsl(${hue3},${s3}%,${l3}%) 100%)`;
  }

  services = [
    {
      emoji: '🩺',
      title: 'Check-up',
      gradient: this.randomGradient(),
      description: 'Is your pet due for a routine check? Book a full wellness examination with your favourite clinic and keep your pet in top health.'
    },
    {
      emoji: '💉',
      title: 'Vaccination',
      gradient: this.randomGradient(),
      description: 'Keep your pet protected. Schedule their next vaccination with a trusted local vet and stay ahead of seasonal threats.'
    },
    {
      emoji: '✂️',
      title: 'Grooming',
      gradient: this.randomGradient(),
      description: 'Your pet needs its nails cut or a fresh trim? Book an appointment with your favourite clinic for a full pamper session.'
    },
    {
      emoji: '🚨',
      title: 'Emergency Visit',
      gradient: this.randomGradient(),
      description: 'When every second counts, book an urgent emergency visit instantly. Our partner clinics are ready to help right away.'
    },
  ];
}
