import { Account } from './account.model';

export class User {
  public email: string;
  public password: string;
  public account: Account;

  constructor(email: string, password: string, account: Account) {
    this.email = email;
    this.password = password;
    this.account = account;
  }
}
