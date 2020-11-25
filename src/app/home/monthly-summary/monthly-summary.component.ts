import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import * as utils from '../../shared/utils/utils';

@Component({
  selector: 'app-monthly-summary',
  templateUrl: './monthly-summary.component.html',
  styleUrls: ['./monthly-summary.component.scss'],
})
export class MonthlySummaryComponent implements OnInit {
  userIndex = 0;
  data: any;
  income = 0;
  expense = 0;
  labelsMonths: string[] = [];
  dataIncomes: number[] = [];
  dataExpenses: number[] = [];
  currentDate = new Date();
  month = this.currentDate.getMonth();
  year = this.currentDate.getFullYear();
  currentMonth =
    this.year + '-' + (this.month + 1 < 10 ? '0' + this.month + 1 : this.month + 1);


  constructor(private dataStorageService: DataStorageService) {
    for (let i = this.month; i > (this.month - 7); i--) {
      this.labelsMonths.push(utils.monthNames[i]);
    }
  }

  ngOnInit() {
    this.dataStorageService.getUsers().subscribe((users) => {
      for (const transfer of users[this.userIndex].account.transfers) {
        if (transfer.date.toString().includes(this.currentMonth)) {
          transfer.amount > 0
          ? (this.income += transfer.amount)
          : (this.expense += transfer.amount);
        }
      }
    });

    this.dataIncomes = [65, 59, 80, 81, 56, 55, 70];
    this.dataExpenses = [28, 48, 40, 19, 86, 27, 33];

    this.data = {
      labels: this.labelsMonths.reverse(),
      datasets: [
        {
          label: 'Incomes',
          data: this.dataIncomes,
          fill: false,
          borderColor: '#17a2b8',
        },
        {
          label: 'Expenses',
          data: this.dataExpenses,
          fill: false,
          borderColor: '#6c757d',
        },
      ],
    };
  }
}
