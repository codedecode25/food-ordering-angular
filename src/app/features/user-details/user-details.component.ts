import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  showSignupForm: boolean = false;


  toggleForm(event: Event): void {
    event.preventDefault();
    this.showSignupForm = !this.showSignupForm;
  }

}
