import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
})
export class LatestTransactionsComponent implements OnInit {
  latestTransaction = [
    {
      name: 'Work',
      amount: 10.0,
    },
    {
      name: 'Shop',
      amount: -25.5,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
