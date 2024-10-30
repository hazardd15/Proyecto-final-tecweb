import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error) => {
      let message = 'An error occurred';
      if (error.status === 404) message = 'Resource not found';
      if (error.status === 401) message = 'Unauthorized';
      if (error.status === 500) message = 'Server error';
      snackBar.open(message, 'Close', { duration: 3000 });
      return throwError(() => error);
    })
  );
};
