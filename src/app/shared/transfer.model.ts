export class Transfer {
  public accountNumber: string;
  public amount: number;
  public title: string;
  public name: string;
  public date: Date;

  constructor(
    accountNumber: string,
    amount: number,
    title: string = '',
    name: string = '',
    date: Date = new Date()
  ) {
    this.accountNumber = accountNumber;
    this.amount = amount;
    this.title = title;
    this.name = name;
    this.date = date;
  }
}
