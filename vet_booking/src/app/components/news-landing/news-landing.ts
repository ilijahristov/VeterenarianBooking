import { Component } from '@angular/core';
import { CardComponent } from '../card/card';

@Component({
  selector: 'app-news-landing',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news-landing.html',
  styleUrl: './news-landing.css'
})
export class NewsLandingComponent {}
