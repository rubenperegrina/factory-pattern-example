import { Injectable } from '@angular/core';
import { AuthenticationService } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements AuthenticationService {

  login(): void {
    // Implementación específica para autenticación mediante usuario y contraseña
    console.log('Login in LoginService');
  }

  logout(): void {
    // Implementación específica para el cierre de sesión
    console.log('Logout in LoginService');
  }
}
