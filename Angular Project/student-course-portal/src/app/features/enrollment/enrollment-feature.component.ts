import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment-feature',
  standalone: true,
  template: `
    <div class="card">
      <h2>Lazy Loaded Enrollment Feature</h2>
      <p>This module was loaded lazily.</p>
    </div>
  `
})
export class EnrollmentFeatureComponent {}
