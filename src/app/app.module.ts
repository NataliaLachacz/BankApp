import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

import { UsersService } from './user/users.service';
import { DataStorageService } from './shared/data-storage.service';
import { AccountService } from './home/account.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountInfoComponent } from './home/account-info/account-info.component';
import { HomeComponent } from './home/home.component';
import { LatestTransactionsComponent } from './home/latest-transactions/latest-transactions.component';
import { MonthlySummaryComponent } from './home/monthly-summary/monthly-summary.component';
import { TransfersComponent } from './transfers/transfers.component';
import { HistoryComponent } from './history/history.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { AmountColorPipe } from './shared/amount-color.pipe';
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
    AmountColorPipe,
  ],
  imports: [
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [AccountService, UsersService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
