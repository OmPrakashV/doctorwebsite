import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  name: string;
  email: string;
  message: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
}