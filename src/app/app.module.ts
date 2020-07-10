import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
