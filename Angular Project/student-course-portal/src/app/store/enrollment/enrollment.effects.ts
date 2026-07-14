import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as EnrollmentActions from './enrollment.actions';
import { EnrollmentService } from '../../services/enrollment.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EnrollmentEffects {
  enrollCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.enrollCourse),
      mergeMap(action =>
        this.enrollmentService.enroll(action.courseId).pipe(
          map(() => EnrollmentActions.enrollCourseSuccess({ courseId: action.courseId }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private enrollmentService: EnrollmentService
  ) {}
}
