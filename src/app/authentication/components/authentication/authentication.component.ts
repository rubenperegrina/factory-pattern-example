import { Component } from '@angular/core';
import { AuthenticationFactory } from '../../factories/authentication.factory';
import { AuthenticationService } from '../../interfaces/authentication.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
  private authService: AuthenticationService;

  constructor(private authServiceFactory: AuthenticationFactory) {
    // Aquí puedes elegir el tipo de autenticación según tus necesidades
    this.authService = this.authServiceFactory.createAuthenticationService('social');
  }
  
  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
