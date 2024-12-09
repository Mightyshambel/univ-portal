import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  givenName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: string = '';
  birthdate: string = '';
  address: string = '';

  onSignup() {
    // Handle signup logic here
    console.log('Name:', this.givenName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Phone:', this.phoneNumber);
    console.log('Birthdate:', this.birthdate);
    console.log('Address:', this.address);
  }
}
