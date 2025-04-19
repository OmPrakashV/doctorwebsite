import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  description: string;
  icon: string;
}

interface Resource {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Welcome to Our Surgical Oncology Practice';
  description = 'Your health is our priority. We specialize in providing comprehensive care for cancer patients.';
  aboutDescription = 'Our team of experienced surgical oncologists combines advanced medical expertise with compassionate care to deliver the best possible outcomes for our patients.';
  
  services: Service[] = [
    {
      name: 'Surgical Oncology',
      description: 'State-of-the-art surgical treatments for various types of cancer.',
      icon: 'assets/icons/surgery.svg'
    },
    {
      name: 'Cancer Screening',
      description: 'Early detection and preventive care services.',
      icon: 'assets/icons/screening.svg'
    },
    {
      name: 'Post-Surgery Care',
      description: 'Comprehensive follow-up and recovery support.',
      icon: 'assets/icons/care.svg'
    }
  ];

  patientResources: Resource[] = [
    {
      title: 'Treatment Guidelines',
      description: 'Information about treatment processes and protocols.',
      link: '/resources/treatment'
    },
    {
      title: 'Patient Education',
      description: 'Educational materials and resources for patients.',
      link: '/resources/education'
    },
    {
      title: 'Support Services',
      description: 'Access to support groups and counseling services.',
      link: '/resources/support'
    }
  ];

  ngOnInit() {
    // Initialize any necessary data
  }
}