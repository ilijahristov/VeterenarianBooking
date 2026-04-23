import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CardComponent } from '../card/card';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
type NewsCard = {
  thumbnail: string;
  date: string;
  author: string;
  title: string;
  summary: string;
};
@Component({
  selector: 'app-news-landing',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './news-landing.html',
  styleUrl: './news-landing.css'
})
export class NewsLandingComponent implements OnInit, OnDestroy {
  private bp = inject(BreakpointObserver);
  cards: NewsCard[] = [
    { thumbnail: '/assets/news1.jpg',  date: 'Apr 18, 2025', author: 'PawCare Clinic',       title: '20% Off Vaccinations This Week',    summary: 'PawCare Clinic is running a special promotion — get 20% off all vaccination appointments. Book now before slots fill up.' },
    { thumbnail: '/assets/news2.jpg',  date: 'Apr 15, 2025', author: 'City Vets',             title: 'Free Checkup for New Patients',     summary: 'New to City Vets? Bring your pet in for a completely free initial checkup. We just love meeting new furry friends.' },
    { thumbnail: '/assets/news3.jpg',  date: 'Apr 10, 2025', author: "Dr. Petrov's",          title: 'Extended Hours on Weekends',        summary: "Dr. Petrov's clinic is now open Saturdays and Sundays until 7pm. Weekend appointments available for all services." },
    { thumbnail: '/assets/news4.jpg',  date: 'Apr 7, 2025',  author: 'HappyPaws Vet',         title: 'New Grooming Suite Now Open',       summary: 'Our brand new grooming suite is open for bookings. Treat your pet to a full wash, trim and pamper session today.' },
    { thumbnail: '/assets/news5.webp', date: 'Apr 3, 2025',  author: 'PawCare Clinic',        title: 'Puppy & Kitten Health Packages',    summary: 'New puppy or kitten? Our all-in-one health package covers vaccinations, microchipping and a full wellness check.' },
    { thumbnail: '/assets/news6.avif', date: 'Mar 28, 2025', author: 'City Vets',             title: 'Easter Holiday Opening Hours',      summary: 'City Vets will have adjusted opening hours over Easter. Emergency care remains available 24/7 as always.' },
    { thumbnail: '/assets/news7.jpeg', date: 'Mar 20, 2025', author: 'FurFirst Animal Care',  title: 'Senior Pet Wellness Month',         summary: 'This month we are offering free senior pet screenings for dogs and cats aged 8 and over. Limited slots available.' },
    { thumbnail: '/assets/news1.jpg',  date: 'Mar 14, 2025', author: 'PawCare Clinic',        title: 'Spring Flea & Tick Treatment',      summary: 'Spring is here and so are parasites. Book your pet for our seasonal flea and tick prevention treatment today.' },
    { thumbnail: '/assets/news2.jpg',  date: 'Mar 8, 2025',  author: 'City Vets',             title: 'New Dental Cleaning Service',       summary: "We've added professional dental cleaning to our services. Keep your pet's teeth healthy and their smile bright." },
    { thumbnail: '/assets/news3.jpg',  date: 'Mar 1, 2025',  author: "Dr. Petrov's",          title: 'Pet Nutrition Workshop',            summary: 'Join our free nutrition workshop this Saturday. Learn how to feed your pet for a longer, healthier and happier life.' },
    { thumbnail: '/assets/news4.jpg',  date: 'Feb 22, 2025', author: 'HappyPaws Vet',         title: 'Microchipping Drive This Month',    summary: 'Get your pet microchipped for just £10 during February. Walk-ins welcome at any HappyPaws Vet location.' },
    { thumbnail: '/assets/news5.webp', date: 'Feb 15, 2025', author: 'PawCare Clinic',        title: 'Meet Our New Exotic Pet Vet',       summary: 'We are thrilled to welcome Dr. Lara Moores — exotic pet specialist covering reptiles, birds and small mammals.' },
    { thumbnail: '/assets/news6.avif', date: 'Feb 8, 2025',  author: 'City Vets',             title: 'Online Booking Now Available',      summary: 'Skip the phone queue — book your appointment online in under 2 minutes through our new VetBooking platform.' },
    { thumbnail: '/assets/news7.jpeg', date: 'Feb 1, 2025',  author: 'FurFirst Animal Care',  title: 'Anxiety & Behaviour Consultations', summary: 'Struggling with a stressed or anxious pet? Our behaviour team now offers dedicated consultations. Book today.' },
    { thumbnail: '/assets/news1.jpg',  date: 'Jan 25, 2025', author: 'PawCare Clinic',        title: 'New Year New Health Goals',         summary: 'Start 2025 right with a full wellness check for your pet. PawCare is offering discounted annual health packages.' },
  ];
  // ── Responsive visible count ──────────────────────────────────────────────
  visibleCount = signal(3);
  // ── Page chunks ───────────────────────────────────────────────────────────
  pages = computed(() => {
    const size = this.visibleCount();
    const chunks: NewsCard[][] = [];
    for (let i = 0; i < this.cards.length; i += size) {
      chunks.push(this.cards.slice(i, i + size));
    }
    return chunks;
  });
  totalPages = computed(() => this.pages().length);
  // Clone first page at the end so we can loop seamlessly forward
  displayPages = computed(() => [...this.pages(), this.pages()[0]]);
  // ── Carousel state ────────────────────────────────────────────────────────
  currentPage = signal(0);
  animated   = signal(true);
  private isResetting = false;
  trackTransform = computed(() => `translateX(-${this.currentPage() * 100}%)`);
  // Show prev/next arrow buttons when there are more than 5 pages
  showArrows = computed(() => this.totalPages() > 5);
  // Sliding dot window — shows at most 7 dots at a time
  dotWindow = computed(() => {
    const total   = this.totalPages();
    const current = this.currentPage();
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i);
    }
    let start = Math.max(0, current - 3);
    const end = Math.min(total - 1, start + 6);
    start = Math.max(0, end - 6);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });
  private interval: ReturnType<typeof setInterval> | null = null;
  private bpSub: { unsubscribe(): void } | null = null;
  ngOnInit() {
    // Watch breakpoints and update visibleCount signal
    this.bpSub = this.bp
      .observe(['(max-width: 640px)', '(max-width: 1024px)'])
      .subscribe(result => {
        const newCount =
          result.breakpoints['(max-width: 640px)']  ? 1 :
          result.breakpoints['(max-width: 1024px)'] ? 2 : 3;
        if (newCount !== this.visibleCount()) {
          this.visibleCount.set(newCount);
          // Reset position when layout changes
          this.animated.set(false);
          this.currentPage.set(0);
          requestAnimationFrame(() =>
            requestAnimationFrame(() => this.animated.set(true))
          );
        }
      });
    this.interval = setInterval(() => this.next(), 8000);
  }
  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
    if (this.bpSub)   this.bpSub.unsubscribe();
  }
  next() {
    if (this.isResetting) return;
    this.animated.set(true);
    this.currentPage.update(p => p + 1);
    // We just slid onto the clone page — silently snap back after transition
    if (this.currentPage() >= this.totalPages()) {
      this.isResetting = true;
      setTimeout(() => {
        this.animated.set(false);
        this.currentPage.set(0);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            this.animated.set(true);
            this.isResetting = false;
          })
        );
      }, 700);
    }
  }
  prev() {
    if (this.isResetting || this.currentPage() === 0) return;
    this.animated.set(true);
    this.currentPage.update(p => p - 1);
  }
  goTo(index: number) {
    if (this.isResetting) return;
    this.animated.set(true);
    this.currentPage.set(index);
  }
}
