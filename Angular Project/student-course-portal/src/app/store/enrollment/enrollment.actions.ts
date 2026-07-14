import { createAction, props } from '@ngrx/store';

export const loadEnrollments = createAction('[Enrollment] Load Enrollments');
export const loadEnrollmentsSuccess = createAction('[Enrollment] Load Enrollments Success', props<{ enrolledCourseIds: number[] }>());
export const enrollCourse = createAction('[Enrollment] Enroll Course', props<{ courseId: number }>());
export const enrollCourseSuccess = createAction('[Enrollment] Enroll Course Success', props<{ courseId: number }>());
