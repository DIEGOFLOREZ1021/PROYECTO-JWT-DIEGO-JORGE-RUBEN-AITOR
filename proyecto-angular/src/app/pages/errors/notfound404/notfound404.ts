import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound404',
  standalone: true,
  templateUrl: './notfound404.html',
})
export class Notfound404Component {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/products']);
  }
}
