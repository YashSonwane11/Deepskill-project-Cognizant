import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducers';

export const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state.courses
);

export const selectCourseLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state.loading
);

export const selectCourseError = createSelector(
  selectCourseState,
  (state: CourseState) => state.error
);
