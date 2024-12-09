import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone:true,
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      // Process the form submission
      console.log('Form Submitted:', this.contact);
      alert('Thank you for contacting us!');
      
      // Reset the form after submission
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
}
