import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss'],
})
export class LatestTransactionsComponent implements OnInit {
  userIndex = 0;
  transfers = [];
  latestTransaction = [];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    return this.dataStorageService.getUsers().subscribe((users) => {
      this.transfers = users[this.userIndex].account.transfers;
      this.latestTransaction = [
        this.transfers[this.transfers.length - 1],
        this.transfers[this.transfers.length - 2],
      ];
    });
  }
}
