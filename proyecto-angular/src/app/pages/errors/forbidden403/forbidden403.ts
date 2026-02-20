import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden403',
  standalone: true,
  templateUrl: './forbidden403.html',
})
export class Error403Component {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/products']);
  }
}

