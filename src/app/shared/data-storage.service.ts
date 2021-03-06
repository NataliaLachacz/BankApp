import { Transfer } from './transfer.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../user/users.service';

@Injectable()
export class DataStorageService {
  private apiUrl = 'https://bankapp-6b895.firebaseio.com/users.json';

  constructor(private http: HttpClient, private usersService: UsersService) {}

  storeAccount() {
    return this.http.put(this.apiUrl, this.usersService.getUsers());
  }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  putTransfer(users: User[], transfer: Transfer) {
    console.log(users, transfer);
    users[0].account.transfers.push(transfer);
    return this.http.put(this.apiUrl, users);
  }
}
