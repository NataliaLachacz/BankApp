import { UsersService } from './user/users.service';
import { DataStorageService } from './shared/data-storage.service';
import { AccountService } from './home/account.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountInfoComponent } from './home/account-info/account-info.component';
import { HomeComponent } from './home/home.component';
import { LatestTransactionsComponent } from './home/latest-transactions/latest-transactions.component';
import { MonthlySummaryComponent } from './home/monthly-summary/monthly-summary.component';

import { ChartModule } from 'primeng/chart';
import { TransfersComponent } from './transfers/transfers.component';
import { HistoryComponent } from './history/history.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountInfoComponent,
    HomeComponent,
    LatestTransactionsComponent,
    MonthlySummaryComponent,
    TransfersComponent,
    HistoryComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ChartModule, HttpClientModule],
  providers: [AccountService, UsersService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
