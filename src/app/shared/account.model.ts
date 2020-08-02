import { Transfer } from './transfer.model';

export class Account {
  public balance: number;
  public accountNumber: string;
  public transfers: Transfer[];

  constructor(balance: number, accountNumber: string, transfers: Transfer[]) {
    this.balance = balance;
    this.accountNumber = accountNumber;
    this.transfers = transfers;
  }
}
