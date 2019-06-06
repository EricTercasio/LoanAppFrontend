import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from "ng2-charts";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService} from "./service/client.service";
import { AppComponent } from './app.component';
import { ClientFormComponent} from "./client-form/client-form/client-form.component";
import { LoginFormComponent} from "./login-form/login-form/login-form.component";
import {Client} from "./model/client";
import { ClientPageComponent } from './client-page/client-page/client-page.component';
import { OfficerPageComponent } from './officer-page/officer-page/officer-page.component';
import {LoanOfficerService} from "./service/loan-officer.service";
import { LoanFormComponent } from './loan-form/loan-form/loan-form.component';
import { OfficerLoanPageComponent } from './officer-loan-page/officer-loan-page/officer-loan-page.component';
import { AllLoansComponent } from './officer-all-loans-page/all-loans/all-loans.component';
import { OfficerLoanViewingPageComponent } from './officer-loan-viewing-page/officer-loan-viewing-page/officer-loan-viewing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    LoginFormComponent,
    ClientPageComponent,
    OfficerPageComponent,
    LoanFormComponent,
    OfficerLoanPageComponent,
    AllLoansComponent,
    OfficerLoanViewingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService, LoanOfficerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

