import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CardComponent } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-landing',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './news-landing.html',
  styleUrl: './news-landing.css'
})
export class NewsLandingComponent implements OnInit, OnDestroy {
  cards = [
    { thumbnail: 'https://placehold.co/400x200', date: 'Apr 18, 2025', author: 'PawCare Clinic',       title: '20% Off Vaccinations This Week',   summary: 'PawCare Clinic is running a special promotion — get 20% off all vaccination appointments. Book now before slots fill up.' },
    { thumbnail: 'https://placehold.co/400x200', date: 'Apr 15, 2025', author: 'City Vets',             title: 'Free Checkup for New Patients',    summary: 'New to City Vets? Bring your pet in for a completely free initial checkup. We just love meeting new furry friends.' },
    { thumbnail: 'https://placehold.co/400x200', date: 'Apr 10, 2025', author: "Dr. Petrov's",          title: 'Extended Hours on Weekends',       summary: "Dr. Petrov's clinic is now open Saturdays and Sundays until 7pm. Weekend appointments available for all services." },
    { thumbnail: 'https://placehold.co/400x200', date: 'Apr 7, 2025',  author: 'HappyPaws Vet',        title: 'New Grooming Suite Now Open',      summary: 'Our brand new grooming suite is open for bookings. Treat your pet to a full wash, trim and pamper session today.' },
    { thumbnail: 'https://placehold.co/400x200', date: 'Apr 3, 2025',  author: 'PawCare Clinic',       title: 'Puppy & Kitten Health Packages',   summary: 'New puppy or kitten? Our all-in-one health package covers vaccinations, microchipping and a full wellness check.' },
    { thumbnail: 'https://placehold.co/400x200', date: 'Mar 28, 2025', author: 'City Vets',             title: 'Easter Holiday Opening Hours',     summary: 'City Vets will have adjusted opening hours over Easter. Emergency care remains available 24/7 as always.' },
    { thumbnail: 'https://placehold.co/400x200', date: 'Mar 20, 2025', author: 'FurFirst Animal Care',  title: 'Senior Pet Wellness Month',        summary: 'This month we are offering free senior pet screenings for dogs and cats aged 8 and over. Limited slots available.' },
  ];

  visibleCount = 3;
  currentIndex = signal(0);

  visibleCards = computed(() =>
    this.cards.slice(this.currentIndex(), this.currentIndex() + this.visibleCount)
  );

  totalSlides = computed(() => this.cards.length - this.visibleCount + 1);

  private interval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.interval = setInterval(() => this.next(), 8000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  next() {
    this.currentIndex.update(i => i + 1 >= this.totalSlides() ? 0 : i + 1);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
