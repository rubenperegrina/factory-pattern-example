import { Injectable } from '@angular/core';
import { AuthenticationService } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class TwoFactorLoginService implements AuthenticationService {

  login(): void {
    // Implementación específica para autenticación de dos factores
    console.log('Login in TwoFactorLoginService');
  }

  logout(): void {
    // Implementación específica para el cierre de sesión
    console.log('Logout in TwoFactorLoginService');
  }
}
