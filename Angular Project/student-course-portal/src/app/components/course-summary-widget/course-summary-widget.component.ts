import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="card summary-widget">
      <h4>{{ title }}</h4>
      <div class="value">{{ value }}</div>
    </div>
  `,
  styles: [`
    .summary-widget { text-align: center; }
    .summary-widget h4 { margin: 0 0 10px 0; color: var(--secondary-color); }
    .value { font-size: 2rem; font-weight: bold; color: var(--primary-color); }
  `]
})
export class CourseSummaryWidgetComponent {
  @Input() title: string = '';
  @Input() value: string | number = 0;
}
