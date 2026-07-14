import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CourseListComponent } from './course-list.component';
import { Course } from '../../models/course.model';
import { selectAllCourses, selectCourseLoading } from '../../store/course/course.selectors';
import { NotificationService } from '../../services/notification.service';
import * as CourseActions from '../../store/course/course.actions';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

// ─── Mock Data ────────────────────────────────────────────────────────────────
const mockCourses: Course[] = [
  { id: 1, name: 'Introduction to Angular', code: 'ANG101', credits: 3, gradeStatus: 'pending' },
  { id: 2, name: 'Advanced TypeScript',     code: 'TS201',  credits: 4, gradeStatus: 'passed'  }
];

// ─── Initial NgRx State ───────────────────────────────────────────────────────
const initialState = {
  course: {
    courses: mockCourses,
    loading: false,
    error: null
  },
  enrollment: {
    enrolledCourseIds: []
  }
};

// ─── Mock NotificationService ─────────────────────────────────────────────────
const mockNotificationService = {
  showSuccess: jasmine.createSpy('showSuccess'),
  showError:   jasmine.createSpy('showError')
};

// ─────────────────────────────────────────────────────────────────────────────
describe('CourseListComponent (MockStore)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CourseListComponent,          // standalone component
        RouterTestingModule           // provides Router & ActivatedRoute stubs
      ],
      providers: [
        // ✅ provideMockStore replaces the real NgRx store with a controllable mock
        provideMockStore({ initialState }),
        { provide: NotificationService, useValue: mockNotificationService }
      ]
    }).compileComponents();

    store   = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    // Override selectors to return values from our mock state
    store.overrideSelector(selectAllCourses, mockCourses);
    store.overrideSelector(selectCourseLoading, false);

    fixture.detectChanges(); // triggers ngOnInit → dispatches loadCourses
  });

  afterEach(() => {
    store.resetSelectors(); // clean up overridden selectors after each test
  });

  // ── Test 1: Component is created ────────────────────────────────────────────
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // ── Test 2: dispatches loadCourses action on ngOnInit ───────────────────────
  it('should dispatch loadCourses action on init', () => {
    // Spy on store.dispatch to track what actions are dispatched
    spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();

    expect(store.dispatch).toHaveBeenCalledWith(
      CourseActions.loadCourses({ searchQuery: '' })
    );
  });

  // ── Test 3: renders course cards from store state ───────────────────────────
  it('should render a course card for each course in the store', () => {
    // app-course-card elements should match the mockCourses count
    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(mockCourses.length);
  });

  // ── Test 4: loading state — show loading indicator when loading is true ──────
  it('should show a loading indicator when loading is true', () => {
    // Override the loading selector to return true (simulate pending HTTP call)
    store.overrideSelector(selectCourseLoading, true);
    store.refreshState(); // push new state to all subscribers
    fixture.detectChanges();

    // The template should show the loading element (check your course-list.component.html)
    const loadingEl = fixture.debugElement.query(By.css('.loading-spinner, [data-testid="loading"], p'));
    expect(loadingEl).not.toBeNull();
  });

  // ── Test 5: no cards shown when courses array is empty ───────────────────────
  it('should render no course cards when courses array is empty', () => {
    store.overrideSelector(selectAllCourses, []);
    store.refreshState();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(0);
  });

  // ── Test 6: onEnroll dispatches enrollCourse action ─────────────────────────
  it('should dispatch enrollCourse action and show notification when onEnroll is called', () => {
    spyOn(store, 'dispatch').and.callThrough();

    component.onEnroll(mockCourses[0]);

    expect(store.dispatch).toHaveBeenCalledWith(
      EnrollmentActions.enrollCourse({ courseId: mockCourses[0].id })
    );
    expect(mockNotificationService.showSuccess).toHaveBeenCalledWith(
      `Enrolled in ${mockCourses[0].name}`
    );
  });

  // ── Test 7: searchQuery defaults to empty string ─────────────────────────────
  it('should initialise searchQuery as an empty string', () => {
    expect(component.searchQuery).toBe('');
  });

  // ── Test 8: onSearchChange re-dispatches loadCourses ─────────────────────────
  it('should dispatch loadCourses again when onSearchChange is called', () => {
    spyOn(store, 'dispatch').and.callThrough();
    component.searchQuery = 'angular';
    component.onSearchChange();

    expect(store.dispatch).toHaveBeenCalledWith(
      CourseActions.loadCourses({ searchQuery: 'angular' })
    );
  });

  // ── Test 9: state change updates rendered courses ────────────────────────────
  it('should re-render when store state changes to a new courses list', () => {
    const newCourses: Course[] = [
      { id: 3, name: 'RxJS Patterns', code: 'RX301', credits: 2, gradeStatus: 'failed' }
    ];
    store.overrideSelector(selectAllCourses, newCourses);
    store.refreshState();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(1);
  });
});
