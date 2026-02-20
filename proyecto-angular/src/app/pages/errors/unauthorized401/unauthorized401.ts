import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-unauthorized401',
  standalone: true,
  templateUrl: './unauthorized401.html',
})
export class Unauthorized401Component {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  goToLogin() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
