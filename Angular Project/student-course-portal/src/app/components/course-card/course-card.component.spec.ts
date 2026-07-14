import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

// ─── Mock Course Data ────────────────────────────────────────────────────────
const mockCourse: Course = {
  id: 1,
  name: 'Data Structures',
  code: 'CS101',
  credits: 4,
  gradeStatus: 'passed'
};

// ─────────────────────────────────────────────────────────────────────────────
describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    // Configure TestBed — CourseCardComponent is standalone so we import it directly
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    // Provide @Input before first change detection
    component.course = mockCourse;
    fixture.detectChanges(); // triggers ngOnInit + renders the template
  });

  // ── Test 1: Component Creation ──────────────────────────────────────────────
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // ── Test 2: @Input — Course name and code are rendered in the template ──────
  it('should display the course name and code from @Input', () => {
    // Query the <h3> element rendered in course-card.component.html
    const h3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
    expect(h3.textContent).toContain('CS101');
  });

  // ── Test 3: @Input — credits pipe renders correctly ─────────────────────────
  it('should render credits using the creditLabel pipe', () => {
    const creditsEl: HTMLElement = fixture.debugElement.query(By.css('.credits')).nativeElement;
    // creditLabel pipe transforms 4 → '4 Credits'
    expect(creditsEl.textContent).toContain('Credits');
  });

  // ── Test 4: @Input — gradeStatus badge renders 'Passed' for 'passed' ────────
  it('should show Passed badge when gradeStatus is passed', () => {
    const badge: HTMLElement = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.textContent?.trim()).toBe('Passed');
  });

  // ── Test 5: @Input — gradeStatus badge renders 'Failed' for 'failed' ────────
  it('should show Failed badge when gradeStatus is failed', () => {
    component.course = { ...mockCourse, gradeStatus: 'failed' };
    fixture.detectChanges();
    const badge: HTMLElement = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.textContent?.trim()).toBe('Failed');
  });

  // ── Test 6: @Input — gradeStatus badge renders 'Pending' for 'pending' ──────
  it('should show Pending badge when gradeStatus is pending', () => {
    component.course = { ...mockCourse, gradeStatus: 'pending' };
    fixture.detectChanges();
    const badge: HTMLElement = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.textContent?.trim()).toBe('Pending');
  });

  // ── Test 7: @Output — enrollEvent emits the course when Enroll is clicked ───
  it('should emit the course object via enrollEvent when Enroll button is clicked', () => {
    // Spy on the EventEmitter's emit method
    spyOn(component.enrollEvent, 'emit');

    // Find and click the enroll button
    const enrollBtn: HTMLElement = fixture.debugElement.query(By.css('.enroll-btn')).nativeElement;
    enrollBtn.click();
    fixture.detectChanges();

    // Assert emit was called with the correct course object
    expect(component.enrollEvent.emit).toHaveBeenCalledOnceWith(mockCourse);
  });

  // ── Test 8: @Output — emit is NOT called before any button click ─────────────
  it('should NOT emit enrollEvent before any button click', () => {
    spyOn(component.enrollEvent, 'emit');
    expect(component.enrollEvent.emit).not.toHaveBeenCalled();
  });

  // ── Test 9: ngOnChanges — logs previous and current value ───────────────────
  it('should call ngOnChanges and log previous and current course values', () => {
    // Spy on console.log to verify ngOnChanges fires with change info
    spyOn(console, 'log');

    const updatedCourse: Course = { ...mockCourse, name: 'Advanced Angular' };

    // Manually call ngOnChanges with a SimpleChanges object
    component.ngOnChanges({
      course: new SimpleChange(mockCourse, updatedCourse, false)
    });

    // ngOnChanges should have triggered console.log
    expect(console.log).toHaveBeenCalled();
  });

  // ── Test 10: Enroll button exists in DOM ─────────────────────────────────────
  it('should render an Enroll button', () => {
    const btn = fixture.debugElement.query(By.css('.enroll-btn'));
    expect(btn).not.toBeNull();
    expect(btn.nativeElement.textContent.trim()).toBe('Enroll');
  });
});
