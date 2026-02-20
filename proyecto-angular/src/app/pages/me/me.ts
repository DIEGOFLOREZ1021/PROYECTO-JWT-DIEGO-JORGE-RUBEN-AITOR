import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [NgIf],
  templateUrl: './me.html',
})
export class MeComponent implements OnInit {

  me: any = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMe().subscribe({
      next: (res) => this.me = res,
      error: (err) => console.error(err)
    });
  }
}

