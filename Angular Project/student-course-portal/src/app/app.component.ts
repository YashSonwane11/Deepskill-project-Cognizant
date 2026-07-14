import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf, AsyncPipe],
  template: `
    <app-header></app-header>
    <div *ngIf="loadingService.loading$ | async" class="loading-overlay">
      <div class="spinner"></div>
    </div>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  constructor(public loadingService: LoadingService) {}
}
