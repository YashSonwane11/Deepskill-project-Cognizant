import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent {
  studentName = 'Yashkumar Sonwane';
  studentEmail = 'yashkumar.sonwane@gmail.com';
  enrolledCourseIds$ = this.store.select(selectEnrolledCourseIds);

  constructor(private store: Store) {}
}
