import { DataStorageService } from './../shared/data-storage.service';
import { Transfer } from './../shared/transfer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  transfers: Transfer[];
  cols: any[];
  userIndex = 0;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService
      .getUsers()
      .subscribe(
        (users) => (this.transfers = users[this.userIndex].account.transfers)
      );

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'amount', header: 'Amount' },
      { field: 'date', header: 'Date' },
    ];
  }
}
