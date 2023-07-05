import { Injectable } from '@angular/core';
import { AuthenticationService } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService implements AuthenticationService {

  login(): void {
    // Implementación específica para autenticación mediante proveedores de terceros
    console.log('Login in SocialLoginService');
  }

  logout(): void {
    // Implementación específica para el cierre de sesión
    console.log('Logout in SocialLoginService');

  }
}
