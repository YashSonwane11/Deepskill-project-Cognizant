# 🎓 Student Course Portal

> A production-grade **Angular 18** web application for managing student course enrollments, built with **NgRx** state management, **Reactive Forms**, **Route Guards**, **HTTP Interceptors**, and a **mock REST API** — developed as part of the Cognizant Digital Nurture assignment.

[![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular)](https://angular.io/)
[![NgRx](https://img.shields.io/badge/NgRx-18-purple?logo=redux)](https://ngrx.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-pink?logo=reactivex)](https://rxjs.dev/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-Mock_API-green)](https://github.com/typicode/json-server)

---

## 📸 Preview

> **App runs on:** `http://localhost:4200`
> **Mock API runs on:** `http://localhost:3000`

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home Page** | Dashboard overview with course summary widget |
| 📚 **Course List** | Browse all courses with live search functionality |
| 🔍 **Course Detail** | Dynamic route with detailed course info (`/courses/:id`) |
| 👤 **Student Profile** | View and manage student profile (Auth-protected) |
| 📝 **Template-driven Form** | Enrollment form using Angular template forms |
| ⚡ **Reactive Form** | Enrollment form using Angular reactive forms |
| 🔒 **Auth Guard** | Route protection using `canActivate` |
| 🚪 **Unsaved Changes Guard** | Warns before leaving form with `canDeactivate` |
| 🌐 **HTTP Interceptor** | Attaches auth token to every outgoing request |
| 🗄️ **NgRx State Management** | Global state for courses & enrollments |
| 🔄 **Lazy Loaded Feature Module** | Enrollment feature loaded on demand |
| 📡 **Mock REST API** | JSON Server simulating a real backend |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 18 | Frontend framework |
| NgRx Store | 18 | Global state management |
| NgRx Effects | 18 | Side effects (API calls) |
| NgRx Entity | 18 | Normalized entity state |
| NgRx DevTools | 18 | Redux DevTools integration |
| RxJS | 7.8 | Reactive programming |
| TypeScript | 5.4 | Type safety |
| JSON Server | 0.17 | Mock REST API |
| Karma + Jasmine | 6.4 / 5.1 | Unit testing |

---

## 🗂️ Project Structure

```
student-course-portal/
│
├── 📄 db.json                        # Mock database (JSON Server)
├── 📄 package.json                   # Project dependencies & scripts
├── 📄 angular.json                   # Angular CLI configuration
├── 📄 tsconfig.json                  # TypeScript configuration
│
└── 📁 src/
    ├── 📄 index.html                 # Root HTML entry point
    ├── 📄 main.ts                    # Angular bootstrap entry
    ├── 📄 styles.css                 # Global styles
    │
    └── 📁 app/
        │
        ├── 📄 app.component.ts       # Root app component
        ├── 📄 app.config.ts          # App-level providers (DI config)
        ├── 📄 app.routes.ts          # Top-level route definitions
        │
        ├── 📁 components/            # Shared/Reusable UI components
        │   ├── 📁 course-card/       # Course card display component
        │   ├── 📁 course-summary-widget/  # Dashboard summary widget
        │   └── 📁 header/            # Top navigation header
        │
        ├── 📁 pages/                 # Routable page components
        │   ├── 📁 home/              # Home dashboard page
        │   ├── 📁 course-list/       # Course listing with search
        │   ├── 📁 course-detail/     # Single course detail view
        │   ├── 📁 enrollment-form/   # Template-driven enrollment form
        │   ├── 📁 reactive-enrollment-form/  # Reactive enrollment form
        │   ├── 📁 student-profile/   # Student profile page
        │   └── 📁 not-found/         # 404 error page
        │
        ├── 📁 features/              # Lazy-loaded feature modules
        │   └── 📁 enrollment/        # Enrollment feature (lazy loaded)
        │
        ├── 📁 store/                 # NgRx state management
        │   ├── 📁 course/            # Course state (actions, reducer, effects, selectors)
        │   └── 📁 enrollment/        # Enrollment state
        │
        ├── 📁 services/              # Business logic & API services
        │   ├── 📄 auth.service.ts    # Authentication logic
        │   ├── 📄 course.service.ts  # Course API calls
        │   ├── 📄 enrollment.service.ts  # Enrollment API calls
        │   ├── 📄 loading.service.ts # Global loading state
        │   └── 📄 notification.service.ts # Toast/notification service
        │
        ├── 📁 guards/                # Route guards
        │   ├── 📄 auth.guard.ts      # Prevents unauthenticated access
        │   └── 📄 unsaved-changes.guard.ts  # Prevents accidental navigation
        │
        ├── 📁 interceptors/          # HTTP interceptors
        │   └── 📄 auth.interceptor.ts  # Attaches Bearer token to requests
        │
        ├── 📁 models/                # TypeScript interfaces/types
        │   └── 📄 course.model.ts    # Course interface definition
        │
        ├── 📁 directives/            # Custom Angular directives
        ├── 📁 pipes/                 # Custom Angular pipes
        └── 📁 layouts/               # Layout wrapper components
```

---

## 🗄️ Database Schema

The mock REST API uses **`db.json`** as its data store, served by **JSON Server** on `http://localhost:3000`.

### Entity Relationship Diagram

```
┌─────────────────────────────┐         ┌──────────────────────────────────┐
│          STUDENT             │         │            COURSE                 │
├─────────────────────────────┤         ├──────────────────────────────────┤
│  id              : number   │         │  id          : number             │
│  name            : string   │         │  name        : string             │
│  email           : string   │         │  code        : string             │
│  enrolledCourseIds: number[]│─────────│  credits     : number             │
└─────────────────────────────┘  M:M    │  gradeStatus : 'passed'           │
              │                         │              | 'failed'            │
              │                         │              | 'pending'           │
              │                         └──────────────────────────────────┘
              │                                        │
              └──────────────────┬─────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │        ENROLLMENT        │
                    ├─────────────────────────┤
                    │  id        : number      │
                    │  studentId : number      │
                    │  courseId  : number      │
                    │  date      : string      │
                    └─────────────────────────┘
```

### 📋 Data Models

#### `Course`
```typescript
export interface Course {
  id: number;
  name: string;           // e.g. "Introduction to Angular"
  code: string;           // e.g. "ANG101"
  credits: number;        // e.g. 3
  gradeStatus: 'passed' | 'failed' | 'pending';
}
```

#### `Student`
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "enrolledCourseIds": [1, 2]
}
```

#### `Enrollment`
```json
{
  "id": 1,
  "studentId": 1,
  "courseId": 3,
  "date": "2024-07-14"
}
```

### 🔗 API Endpoints (JSON Server)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/courses` | Get all courses |
| `GET` | `/courses/:id` | Get course by ID |
| `GET` | `/courses?q=keyword` | Search courses |
| `POST` | `/courses` | Create a new course |
| `PUT` | `/courses/:id` | Update a course |
| `DELETE` | `/courses/:id` | Delete a course |
| `GET` | `/students` | Get all students |
| `GET` | `/students/:id` | Get student by ID |
| `GET` | `/enrollments` | Get all enrollments |
| `POST` | `/enrollments` | Create an enrollment |

---

## 🔄 Application Architecture

```
                        ┌─────────────────────┐
                        │     Browser/User     │
                        └────────┬────────────┘
                                 │
                        ┌────────▼────────────┐
                        │   Angular Router     │
                        │  (app.routes.ts)     │
                        └────────┬────────────┘
                                 │
               ┌─────────────────┼─────────────────┐
               │                 │                 │
        ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
        │   Guards     │  │    Pages    │  │  Components  │
        │  AuthGuard   │  │  (Routable) │  │  (Reusable)  │
        │  UnsavedGuard│  └──────┬──────┘  └─────────────┘
        └─────────────┘         │
                                 │
                    ┌────────────▼────────────┐
                    │      NgRx Store          │
                    │  ┌────────────────────┐  │
                    │  │  Actions           │  │
                    │  │  Reducers          │  │
                    │  │  Effects ──────────┼──┼──► HTTP Service
                    │  │  Selectors         │  │       │
                    │  └────────────────────┘  │       │
                    └─────────────────────────┘       │
                                                       │
                                          ┌────────────▼────────────┐
                                          │   HTTP Interceptor       │
                                          │  (Adds Auth Token)       │
                                          └────────────┬────────────┘
                                                       │
                                          ┌────────────▼────────────┐
                                          │   JSON Server (Mock API) │
                                          │   http://localhost:3000  │
                                          └─────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Angular CLI](https://angular.io/cli) (v18)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/student-course-portal.git

# 2. Navigate into the project directory
cd student-course-portal

# 3. Install all dependencies
npm install
```

### Running the App

You need to run **two servers simultaneously** in separate terminals:

**Terminal 1 — Start the Mock API:**
```bash
npm run serve:api
# Mock API runs at: http://localhost:3000
```

**Terminal 2 — Start the Angular App:**
```bash
npm start
# App runs at: http://localhost:4200
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start Angular dev server on port 4200 |
| `npm run serve:api` | Start JSON Server mock API on port 3000 |
| `npm run build` | Build the app for production |
| `npm test` | Run unit tests with Karma & Jasmine |
| `npm run watch` | Build in watch mode (development) |

---

## 🛣️ Routes

| Path | Component | Guard |
|---|---|---|
| `/` | HomeComponent | — |
| `/courses` | CourseListComponent | — |
| `/courses/:id` | CourseDetailComponent | — |
| `/profile` | StudentProfileComponent | `AuthGuard` |
| `/enroll` | EnrollmentFormComponent | `AuthGuard`, `UnsavedChangesGuard` |
| `/enroll-reactive` | ReactiveEnrollmentFormComponent | `AuthGuard`, `UnsavedChangesGuard` |
| `/features/enrollment` | Enrollment Feature (Lazy) | — |
| `/404` | NotFoundComponent | — |
| `/**` | Redirect to `/404` | — |

---

## 🧠 NgRx State Structure

```
AppState
├── course
│   ├── ids: number[]
│   ├── entities: { [id]: Course }
│   ├── loading: boolean
│   └── error: string | null
│
└── enrollment
    ├── enrollments: Enrollment[]
    ├── loading: boolean
    └── error: string | null
```

---

## 🧪 Testing

Unit tests are written using **Karma** and **Jasmine**.

```bash
# Run all tests
npm test

# Tests cover:
# ✔ CourseService - HTTP calls
# ✔ Components - rendering & logic
# ✔ Guards - auth checks
```

---

## 👨‍💻 Author

**Yash** — Cognizant Digital Nurture Program

---

## 📄 License

This project is for educational purposes as part of the **Cognizant Digital Nurture** training program.
