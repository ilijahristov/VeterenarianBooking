import { Component } from '@angular/core';
import { HeroLandingComponent } from '../../components/hero-landing/hero-landing';
import { NewsLandingComponent } from '../../components/news-landing/news-landing';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroLandingComponent, NewsLandingComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {}
