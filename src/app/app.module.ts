import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AngularFireModule } from '@angular/fire';

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
import { SignInComponent } from './user/signIn/signIn.component';
import { SignUpComponent } from './user/signUp/signUp.component';

import { AmountColorPipe } from './shared/utils/amount-color.pipe';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyCAYM__UiK2uLQRYBe84227JKsYsU_Vn2g',
  authDomain: 'angular-love.firebaseapp.com',
  databaseURL: 'https://angular-love.firebaseio.com',
  projectId: 'angular-love',
  storageBucket: 'angular-love.appspot.com',
  messagingSenderId: '721645252435'
};
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
    SignInComponent,
    SignUpComponent,
    AmountColorPipe,
  ],
  imports: [
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AccountService, UsersService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
