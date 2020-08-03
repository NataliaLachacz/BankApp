import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  users: User[] = [];
  userIndex = 0;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    return this.dataStorageService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
