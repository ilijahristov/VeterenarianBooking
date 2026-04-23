import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  profileInitials = 'JD';
  profileImageSrc = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSignOut(): void {
    console.log('Sign out clicked');
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
