import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnInit, OnDestroy {
  private routerSub: Subscription | null = null;

  constructor(private router: Router) {}

  // on init scroll to top of the page
  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 0);
      });
  }

  // On destroy unsubscribe from the router events
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
