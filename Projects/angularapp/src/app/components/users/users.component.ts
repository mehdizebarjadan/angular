import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enabledAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Mehdi',
        lastName: 'Ze.',
        age: 20,
        address: {
          street: '50 Main st',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Sam',
        lastName: 'Ji',
        age: 70,
        address: {
          street: '80 shoosh st',
          city: 'San Jose',
          state: 'CA'
        },
        isActive: false,
        registered: new Date('07/8/2015 05:20:00'),
        hide: true
      },
      {
        firstName: 'Linda',
        lastName: 'Bumzi',
        age: 18,
        address: {
          street: '9 oslo st',
          city: 'Lose Angeles',
          state: 'CA'
        },
        isActive: true,
        registered: new Date('07/01/2010 04:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }
  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
