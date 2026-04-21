import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero-landing.html',
  styleUrl: './hero-landing.css'
})
export class HeroLandingComponent {
  heroBg = '/asset/hero.avif';
}
