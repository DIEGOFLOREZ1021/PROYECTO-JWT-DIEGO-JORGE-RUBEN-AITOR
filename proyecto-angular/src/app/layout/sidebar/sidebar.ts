import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './sidebar.html'
})
export class SidebarComponent {

  user = JSON.parse(localStorage.getItem('user') || 'null');
  isAdmin = this.user?.role === 'admin';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}