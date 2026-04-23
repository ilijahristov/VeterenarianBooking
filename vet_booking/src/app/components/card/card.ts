import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() thumbnail: string = '';
  @Input() date: string = '';
  @Input() author: string = '';
  @Input() title: string = '';
  @Input() summary: string = '';
}
