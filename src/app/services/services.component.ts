import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Surgical Oncology',
      description: 'Comprehensive surgical treatment for various cancers.',
      icon: 'surgery'
    },
    {
      title: 'Chemotherapy',
      description: 'Administering chemotherapy to manage cancer effectively.',
      icon: 'medication'
    },
    {
      title: 'Radiation Therapy',
      description: 'Utilizing radiation to target and destroy cancer cells.',
      icon: 'radiation'
    },
    {
      title: 'Palliative Care',
      description: 'Providing relief from the symptoms and stress of cancer.',
      icon: 'care'
    }
  ];

  contactUs(): void {
    // Add contact functionality here
    console.log('Contact form opened');
  }
}