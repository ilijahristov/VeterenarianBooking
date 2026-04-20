import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-landing.html',
  styleUrl: './testimonials-landing.css'
})
export class TestimonialsLandingComponent implements OnInit, OnDestroy {
  heroBg = '/asset/dogs-and-cats-peeking-over-web-banner-free-photo.jpg';

  testimonials = [
    {
      name: 'Aleksandar Dodevski',
      avatar: 'empty-avatar.png',
      quote: 'This app saved me multiple trips to the veterinarian and now I don\'t have to deal with multiple calls to the vet. Everything is handled in minutes.'
    },
    {
      name: 'Teo Blagojevski',
      avatar: 'empty-avatar.png',
      quote: 'I used to spend a lot of time going back and forth with the vet. Now I can do it all with just a few clicks.'
    },
    {
      name: 'Marija Stojkovska',
      avatar: 'empty-avatar.png',
      quote: 'Between work and the kids I never had time to sort out vet visits. This app completely changed that — I booked my cat\'s vaccination on the bus ride home.'
    },
  ];

  currentIndex = signal(0);
  animated = signal(true);

  trackTransform = computed(() =>
    `translateX(calc(-${this.currentIndex()} * 100%))`
  );

  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.interval = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  next() {
    if (this.currentIndex() >= this.testimonials.length - 1) {
      this.animated.set(false);
      this.currentIndex.set(0);
      setTimeout(() => this.animated.set(true), 50);
    } else {
      this.animated.set(true);
      this.currentIndex.update(i => i + 1);
    }
  }

  goTo(index: number) {
    this.animated.set(true);
    this.currentIndex.set(index);
  }
}
