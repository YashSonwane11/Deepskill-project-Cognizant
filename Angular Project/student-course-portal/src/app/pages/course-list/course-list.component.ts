import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import * as CourseActions from '../../store/course/course.actions';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectAllCourses, selectCourseLoading } from '../../store/course/course.selectors';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, AsyncPipe, NgFor, NgIf, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses$ = this.store.select(selectAllCourses);
  loading$ = this.store.select(selectCourseLoading);
  searchQuery = '';

  constructor(
    private store: Store, 
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.store.dispatch(CourseActions.loadCourses({ searchQuery: this.searchQuery }));
    // Update URL query params
    this.router.navigate([], { queryParams: this.searchQuery ? { search: this.searchQuery } : {} });
  }

  onSearchChange() {
    this.loadCourses();
  }

  onEnroll(course: Course) {
    this.store.dispatch(EnrollmentActions.enrollCourse({ courseId: course.id }));
    this.notification.showSuccess(`Enrolled in ${course.name}`);
  }
}
