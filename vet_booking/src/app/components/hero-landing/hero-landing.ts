import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [HeaderComponent, RouterLink, RouterOutlet],
  templateUrl: './hero-landing.html',
  styleUrl: './hero-landing.css'
})
export class HeroLandingComponent {
  heroBg = 'assets/hero.avif';
}
