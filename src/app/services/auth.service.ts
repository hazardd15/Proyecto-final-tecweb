import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Elimina el token de autenticación
    this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
  }
}
