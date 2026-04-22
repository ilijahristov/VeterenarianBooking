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
  heroBg = '/asset/testimonials.jpg';

  testimonials = [
    {
      name: 'Aleksandar Dodevski',
      avatar: '/assets/pfp_male1.avif',
      quote: 'This app saved me multiple trips to the veterinarian and now I don\'t have to deal with multiple calls to the vet. Everything is handled in minutes.'
    },
    {
      name: 'Teo Blagojevski',
      avatar: '/assets/pfp_male2.webp',
      quote: 'I used to spend a lot of time going back and forth with the vet. Now I can do it all with just a few clicks.'
    },
    {
      name: 'Marija Stojkovska',
      avatar: '/assets/pfp_female.jpg',
      quote: 'Between work and the kids I never had time to sort out vet visits. This app completely changed that — I booked my cat\'s vaccination on the bus ride home.'
    },
  ];

  // Track with first card cloned at the end for seamless loop
  displayCards = [...this.testimonials, this.testimonials[0]];

  currentIndex = signal(0);
  animated = signal(true);
  private isResetting = false;

  trackTransform = computed(() =>
    `translateX(calc(-${this.currentIndex()} * 100%))`
  );

  // Dots reflect real position — mod keeps it within 0-2
  activeDotIndex = computed(() =>
    this.currentIndex() % this.testimonials.length
  );

  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.interval = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  next() {
    if (this.isResetting) return;

    this.animated.set(true);
    this.currentIndex.update(i => i + 1);

    // If we just slid onto the clone (index === real length), schedule silent reset
    if (this.currentIndex() === this.testimonials.length) {
      this.isResetting = true;
      setTimeout(() => {
        this.animated.set(false);
        this.currentIndex.set(0);
        // Re-enable transition after one frame so the snap is invisible
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.animated.set(true);
            this.isResetting = false;
          });
        });
      }, 1000); // must match the CSS transition duration exactly
    }
  }

  goTo(index: number) {
    if (this.isResetting) return;
    this.animated.set(true);
    this.currentIndex.set(index);
  }
}
