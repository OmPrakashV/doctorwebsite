import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  title: string;
  description: string;

  constructor() {
    this.title = 'About Our Surgical Oncology Practice';
    this.description = 'We are dedicated to providing the highest quality care for patients with cancer. Our team of experienced surgical oncologists utilizes the latest techniques and technologies to ensure the best outcomes for our patients.';
  }
}