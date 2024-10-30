import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de que tienes el servicio AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Apunta al archivo HTML
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
