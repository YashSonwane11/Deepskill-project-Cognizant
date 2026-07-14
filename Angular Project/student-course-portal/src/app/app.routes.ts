import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },
  { path: 'enroll', component: EnrollmentFormComponent, canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard] },
  { path: 'enroll-reactive', component: ReactiveEnrollmentFormComponent, canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard] },
  { 
    path: 'features/enrollment', 
    loadChildren: () => import('./features/enrollment/enrollment.routes').then(m => m.ENROLLMENT_ROUTES)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
