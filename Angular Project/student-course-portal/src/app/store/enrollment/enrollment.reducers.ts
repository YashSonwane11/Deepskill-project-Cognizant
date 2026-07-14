import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialState: EnrollmentState = {
  enrolledCourseIds: [1]
};

export const enrollmentReducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { enrolledCourseIds }) => ({ ...state, enrolledCourseIds })),
  on(EnrollmentActions.enrollCourseSuccess, (state, { courseId }) => {
    if (!state.enrolledCourseIds.includes(courseId)) {
      return { ...state, enrolledCourseIds: [...state.enrolledCourseIds, courseId] };
    }
    return state;
  })
);
