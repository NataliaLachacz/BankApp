import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://bankapp-6b895.firebaseio.com/users.json';

  constructor() {}
}
