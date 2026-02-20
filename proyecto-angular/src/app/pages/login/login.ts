import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [ FormsModule],
  standalone:true
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: () => {
          this.errorMessage = 'Credenciales incorrectas';
        }
      });
  }
}