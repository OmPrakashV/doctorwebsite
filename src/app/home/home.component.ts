import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string;
  description: string;

  constructor() {
    this.title = 'Welcome to Our Surgical Oncology Practice';
    this.description = 'We specialize in providing comprehensive care for patients with cancer. Our team is dedicated to offering the latest treatments and support for your journey.';
  }

  // Additional methods related to the home page can be added here
}