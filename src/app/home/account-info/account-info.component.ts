import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  userInfo = {
    balance: 15000.0,
    accountNumber: 'PL 47 1500 1881 2930 3987 8586 2383',
  };

  constructor() {}

  ngOnInit() {}
}
