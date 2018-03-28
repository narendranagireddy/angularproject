import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private gender: string[];
  private user: User;
  private country: string[];
  constructor() { }

  ngOnInit() {
    this.country = ['India', 'Australia', 'America'];
    this.gender = ['Male', 'Female', 'Others'];
    this.user = new User({
      email: '', password: '', gender: this.gender[0], terms: false, country: this.country[0], dob: ''
    });
  }

}
