import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf],
  templateUrl: './admin.html'
})
export class AdminComponent implements OnInit {

  adminInfo: any = null;
  error: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAdminInfo().subscribe({
      next: (res) => this.adminInfo = res,
      error: (err) => this.error = err.error?.error || 'Error desconocido'
    });
  }
}