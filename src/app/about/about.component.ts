import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  doctorInfo = {
    name: 'Dr. Jane Smith',
    title: 'MD, FACS',
    experience: '15',
    specializations: [
      'Minimally Invasive Surgery',
      'Robotic Surgery',
      'Gastrointestinal Cancer',
      'Breast Cancer'
    ]
  };

  clinicInfo = {
    name: 'Advanced Surgical Oncology Center',
    location: 'Metropolitan Medical Center',
    established: '2005'
  };

  teamMembers = [
    {
      name: 'Dr. Jane Smith',
      role: 'Lead Surgical Oncologist',
      description: 'Board-certified with over 15 years of experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'Nurse Practitioner',
      description: 'Specialized in oncology patient care'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Associate Surgeon',
      description: 'Fellowship-trained in minimally invasive techniques'
    }
  ];
}