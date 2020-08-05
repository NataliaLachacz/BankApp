import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Transfer } from '../shared/transfer.model';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  newUsers: User[] = [];

  ngOnInit() {
    this.dataStorageService
      .getUsers()
      .subscribe((users) => (this.newUsers = users));
  }

  sendTransfer(form: NgForm) {
    const value = form.value;
    const transfer = new Transfer(
      value.accountNumber,
      -value.amount,
      value.title,
      value.name,
      new Date()
    );
    this.dataStorageService.putTransfer(this.newUsers, transfer).subscribe();
    form.onReset();
  }
}
