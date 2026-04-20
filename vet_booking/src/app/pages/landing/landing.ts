import { Component } from '@angular/core';
import { HeroLandingComponent } from '../../components/hero-landing/hero-landing';
import { NewsLandingComponent } from '../../components/news-landing/news-landing';
import { ServicesLandingComponent } from '../../components/services-landing/services-landing';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroLandingComponent, NewsLandingComponent, ServicesLandingComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {}
