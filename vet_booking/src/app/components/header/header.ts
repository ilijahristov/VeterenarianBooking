import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  profileInitials = 'JD';
  profileImageSrc = '';

  onSignOut(): void {
    console.log('Sign out clicked');
  }
}
