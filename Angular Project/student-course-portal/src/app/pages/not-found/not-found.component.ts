import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card" style="text-align: center; padding: 50px;">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/" class="primary-btn">Go Home</a>
    </div>
  `
})
export class NotFoundComponent {}
