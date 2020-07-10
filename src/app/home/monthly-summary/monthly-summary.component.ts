import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-summary',
  templateUrl: './monthly-summary.component.html',
  styleUrls: ['./monthly-summary.component.scss'],
})
export class MonthlySummaryComponent implements OnInit {
  data: any;

  constructor() {
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

  ngOnInit() {}
}
