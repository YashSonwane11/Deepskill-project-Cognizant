import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Custom Validator
export function noCourseCodeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Async Validator
export function simulateEmailCheck(control: AbstractControl): Observable<ValidationErrors | null> {
  const isTaken = control.value === 'test@example.com' || control.value.startsWith('test@');
  return of(isTaken ? { emailTaken: true } : null).pipe(delay(800));
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['../enrollment-form/enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent {
  enrollForm: FormGroup;
  isSaved = false;

  constructor(private fb: FormBuilder, private notification: NotificationService) {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseCode: ['', [Validators.required, noCourseCodeValidator]],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses() {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      this.notification.showSuccess('Reactive Form Submitted Successfully!');
      this.isSaved = true;
      this.enrollForm.reset();
    }
  }

  canDeactivate(): boolean {
    if (!this.isSaved && this.enrollForm.dirty) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
