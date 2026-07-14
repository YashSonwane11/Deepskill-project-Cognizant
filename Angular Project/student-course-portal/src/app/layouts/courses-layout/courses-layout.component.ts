import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="courses-layout-wrapper">
      <aside class="sidebar">
        <h3>Courses Menu</h3>
        <ul>
          <li>All Courses</li>
          <li>My Enrollments</li>
          <li>Categories</li>
        </ul>
      </aside>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </div>
  `,
  styles: [`
    .courses-layout-wrapper { display: flex; gap: 20px; }
    .sidebar { width: 250px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .sidebar ul { list-style: none; padding: 0; }
    .sidebar li { padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer; }
    .content { flex: 1; }
  `]
})
export class CoursesLayoutComponent {}
