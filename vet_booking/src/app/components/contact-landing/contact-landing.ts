import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-landing.html',
  styleUrl: './contact-landing.css'
})
export class ContactLandingComponent {
  heroBg = 'assets/contact-image.jpg';
}
