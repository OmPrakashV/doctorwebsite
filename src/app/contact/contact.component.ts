import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // Add the non-null assertion operator
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form in constructor
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    // Remove form initialization from ngOnInit since it's now in constructor
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      this.submitted = false;
    }
  }

  get f() { return this.contactForm.controls; }
}