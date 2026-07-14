import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  model: any = {};
  isSaved = false;

  constructor(private notification: NotificationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.notification.showSuccess('Enrollment Submitted successfully!');
      this.isSaved = true;
      form.resetForm();
    }
  }

  onReset(form: NgForm) {
    form.resetForm();
  }

  canDeactivate(): boolean {
    if (!this.isSaved && (this.model.studentName || this.model.studentEmail)) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
