import { Injectable } from '@angular/core';
import { AuthenticationService } from '../interfaces/authentication.interface';
import { LoginService } from '../services/login.service';
import { SocialLoginService } from '../services/social-login.service';
import { TwoFactorLoginService } from '../services/two-factor-login.service';

@Injectable()
export class AuthenticationFactory {
    createAuthenticationService(type: string): AuthenticationService {
        switch (type) {
            case 'login':
                return new LoginService();
            case 'social':
                return new SocialLoginService();
            case 'two-factor':
                return new TwoFactorLoginService();
            default:
                throw new Error('Invalid authentication type');
        }
    }
}
