import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
  services: Array<{ title: string; description: string }> = [
    {
      title: 'Surgical Oncology',
      description: 'Comprehensive surgical treatment for various cancers.'
    },
    {
      title: 'Chemotherapy',
      description: 'Administering chemotherapy to manage cancer effectively.'
    },
    {
      title: 'Radiation Therapy',
      description: 'Utilizing radiation to target and destroy cancer cells.'
    },
    {
      title: 'Palliative Care',
      description: 'Providing relief from the symptoms and stress of cancer.'
    }
  ];

  constructor() {}
}