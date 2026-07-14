import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCoursesSubject = new BehaviorSubject<number[]>([]);
  enrolledCourses$ = this.enrolledCoursesSubject.asObservable();

  constructor(private http: HttpClient) {}

  enroll(courseId: number): Observable<any> {
    const current = this.enrolledCoursesSubject.value;
    if (!current.includes(courseId)) {
      this.enrolledCoursesSubject.next([...current, courseId]);
    }
    return of({ success: true, courseId }).pipe(
      tap(() => console.log(`Enrolled in course ${courseId}`))
    );
  }

  unenroll(courseId: number): Observable<any> {
    const current = this.enrolledCoursesSubject.value;
    this.enrolledCoursesSubject.next(current.filter(id => id !== courseId));
    return of({ success: true, courseId }).pipe(
      tap(() => console.log(`Unenrolled from course ${courseId}`))
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCoursesSubject.value.includes(courseId);
  }

  getEnrolledCourses(): number[] {
    return this.enrolledCoursesSubject.value;
  }
}
