import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
    <div *ngIf="course" class="card">
      <h2>{{ course.name }}</h2>
      <p><strong>Code:</strong> {{ course.code }}</p>
      <p><strong>Credits:</strong> {{ course.credits }}</p>
      <p><strong>Status:</strong> {{ course.gradeStatus }}</p>
      <a routerLink="/courses">Back to Courses</a>
    </div>
  `,
  styles: [`
    .card { padding: 20px; }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.courseService.getCourseById(id).subscribe(c => this.course = c);
    }
  }
}
