import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  contactInfo = {
    address: '123 Medical Center Drive',
    city: 'City',
    state: 'State',
    zip: '12345',
    phone: '(555) 123-4567',
    email: 'info@surgicaloncology.com'
  };
}