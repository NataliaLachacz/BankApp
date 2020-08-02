import { Transfer } from './../shared/transfer.model';
import { User } from './../shared/user.model';
import { Injectable } from '@angular/core';
import { Account } from '../shared/account.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    new User(
      'test@test.com',
      '123456',
      new Account(10060.99, '32105012274797728201584379', [
        new Transfer(
          '16102051703267653856722789',
          146.0,
          'Przelewik',
          'Adam Nowak',
          new Date('Jan 25, 2020')
        ),
        new Transfer(
          '51816910293639059946351236',
          5.0,
          'Za pićko',
          'Patrycja Chwila',
          new Date('Dec 16, 2019')
        ),
      ])
    ),
  ];

  constructor() {}

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers() {
    return this.users;
  }
}
