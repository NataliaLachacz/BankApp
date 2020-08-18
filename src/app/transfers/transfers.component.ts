import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from './../shared/data-storage.service';
import { Transfer } from '../shared/transfer.model';
import { User } from '../shared/user.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
  providers: [MessageService],
})
export class TransfersComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private messageService: MessageService
  ) {}

  newUsers: User[] = [];
  currentDate = new Date();

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
      value.title ? value.title : 'Untitled',
      value.name ? value.name : '',
      value.date ? value.date : new Date()
    );
    this.dataStorageService.putTransfer(this.newUsers, transfer).subscribe();
    this.messageService.add({
      severity: 'success',
      summary: 'Transfer successfully completed',
      detail: 'Via MessageService',
      life: 3000,
    });
    form.onReset();
  }

  onClose() {
    this.messageService.clear();
  }
}
