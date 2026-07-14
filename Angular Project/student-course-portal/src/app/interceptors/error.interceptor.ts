import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Client Error: ${error.error.message}`;
      } else {
        errorMsg = `Server Error Code: ${error.status}, Message: ${error.message}`;
        if (error.status === 401) {
          errorMsg = 'Unauthorized access - Please login';
        } else if (error.status === 403) {
          errorMsg = 'Forbidden access';
        } else if (error.status === 500) {
          errorMsg = 'Internal Server Error';
        }
      }
      notificationService.showError(errorMsg);
      return throwError(() => new Error(errorMsg));
    })
  );
};
