import { Component, EventEmitter, Input, Output, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course.model';
import { NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, OnChanges, OnDestroy {
  @Input() course!: Course;
  @Output() enrollEvent = new EventEmitter<Course>();

  ngOnInit() {
    console.log(`CourseCardComponent initialized for ${this.course?.name}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CourseCardComponent changes:', changes);
  }

  ngOnDestroy() {
    console.log(`CourseCardComponent destroyed for ${this.course?.name}`);
  }

  onEnroll() {
    this.enrollEvent.emit(this.course);
  }
}
