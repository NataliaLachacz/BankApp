import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-summary',
  templateUrl: './monthly-summary.component.html',
  styleUrls: ['./monthly-summary.component.scss'],
})
export class MonthlySummaryComponent implements OnInit {
  data: any;

  constructor(private dataStorageService: DataStorageService) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Incomes',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#17a2b8',
        },
        {
          label: 'Expenses',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#6c757d',
        },
      ],
    };
  }

  userIndex = 0;
  month = new Date().getMonth() + 1;
  year = new Date().getFullYear();
  currentMonth =
    this.year + '-' + (this.month < 10 ? '0' + this.month : this.month);
  income = 0;
  expense = 0;

  ngOnInit() {
    return this.dataStorageService.getUsers().subscribe((users) => {
      for (const transfer of users[this.userIndex].account.transfers) {
        if (transfer.date.toString().includes(this.currentMonth)) {
          transfer.amount > 0
            ? (this.income += transfer.amount)
            : (this.expense += transfer.amount);
        }
      }
    });
  }
}
