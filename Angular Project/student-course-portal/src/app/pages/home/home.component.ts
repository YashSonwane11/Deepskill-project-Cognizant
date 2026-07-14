import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { selectAllCourses, selectCourseLoading } from '../../store/course/course.selectors';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import * as CourseActions from '../../store/course/course.actions';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseSummaryWidgetComponent, AsyncPipe, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses$ = this.store.select(selectAllCourses);
  enrolledCourseIds$ = this.store.select(selectEnrolledCourseIds);
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(CourseActions.loadCourses({}));
  }
}
