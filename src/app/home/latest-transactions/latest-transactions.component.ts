import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
})
export class LatestTransactionsComponent implements OnInit {
  transactions = [
    {
      name: 'Work',
      amount: 1000.0,
    },
    {
      name: 'Shop',
      amount: -25.5,
    },
    {
      name: 'Game',
      amount: -200.5,
    },
    {
      name: 'Manicure',
      amount: -85.0,
    },
  ];
  latestTransaction = [this.transactions[0], this.transactions[1]];

  constructor() {}

  ngOnInit() {}
}
