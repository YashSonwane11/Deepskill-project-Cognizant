import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// ─── Mock Data ────────────────────────────────────────────────────────────────
const mockCourses: Course[] = [
  { id: 1, name: 'Introduction to Angular', code: 'ANG101', credits: 3, gradeStatus: 'pending' },
  { id: 2, name: 'Advanced TypeScript',     code: 'TS201',  credits: 4, gradeStatus: 'passed'  }
];

const API_URL = 'http://localhost:3000/courses';

// ─────────────────────────────────────────────────────────────────────────────
describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // replaces real HttpClient with a testable mock
      providers: [CourseService]
    });
    service  = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // ✅ httpMock.verify() asserts no unexpected HTTP requests are left open after each test
  afterEach(() => {
    httpMock.verify();
  });

  // ── Test 1: Service is created ────────────────────────────────────────────
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // ── Test 2: getCourses — sends GET to correct URL ─────────────────────────
  it('should fetch all courses via GET', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne(API_URL);         // assert exactly one call was made
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);                          // simulate server returning data
  });

  // ── Test 3: getCourses — sends search query param ─────────────────────────
  it('should append ?q= query param when searchQuery is provided', () => {
    service.getCourses('angular').subscribe();

    const req = httpMock.expectOne(`${API_URL}?q=angular`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  // ── Test 4: getCourseById — fetches single course by ID ───────────────────
  it('should fetch a single course by ID', () => {
    service.getCourseById(1).subscribe(course => {
      expect(course).toEqual(mockCourses[0]);
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses[0]);
  });

  // ── Test 5: addCourse — sends POST with course data ───────────────────────
  it('should create a new course via POST', () => {
    const newCourse: Course = { id: 3, name: 'RxJS Patterns', code: 'RX301', credits: 2, gradeStatus: 'pending' };

    service.addCourse(newCourse).subscribe(course => {
      expect(course).toEqual(newCourse);
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCourse);
    req.flush(newCourse);
  });

  // ── Test 6: updateCourse — sends PUT to correct URL ───────────────────────
  it('should update a course via PUT', () => {
    const updated: Course = { ...mockCourses[0], name: 'Angular Advanced' };

    service.updateCourse(1, updated).subscribe(course => {
      expect(course.name).toBe('Angular Advanced');
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updated);
  });

  // ── Test 7: deleteCourse — sends DELETE to correct URL ────────────────────
  it('should delete a course via DELETE', () => {
    service.deleteCourse(1).subscribe(res => {
      expect(res).toBeNull();  // JSON Server returns empty on DELETE
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  // ── Test 8: error handling — 500 Server Error ─────────────────────────────
  it('should propagate a 500 error when the server fails', () => {
    let actualError: any;

    service.getCourses().subscribe({
      next: () => fail('Expected an error, not data'),
      error: (err) => { actualError = err; }
    });

    const req = httpMock.expectOne(API_URL);
    // Simulate a 500 Internal Server Error response from the server
    req.flush('Server Error', { status: 500, statusText: 'Internal Server Error' });

    expect(actualError).toBeTruthy();
    expect(actualError.status).toBe(500);
  });

  // ── Test 9: error handling — 404 Not Found ────────────────────────────────
  it('should propagate a 404 error when course is not found', () => {
    let actualError: any;

    service.getCourseById(999).subscribe({
      next: () => fail('Expected a 404 error'),
      error: (err) => { actualError = err; }
    });

    const req = httpMock.expectOne(`${API_URL}/999`);
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });

    expect(actualError.status).toBe(404);
  });
});
