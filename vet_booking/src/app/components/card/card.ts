import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() thumbnail = 'https://placehold.co/400x200';
  @Input() date = 'Jan 1, 2025';
  @Input() author = 'PawCare Clinic';
  @Input() title = 'Card Title';
  @Input() summary = 'This is a short summary of the news article. It gives the reader just enough to decide if they want to read more.';
}
