import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form/login-form.component";
import {ClientFormComponent} from "./client-form/client-form/client-form.component";
import {OfficerPageComponent} from "./officer-page/officer-page/officer-page.component";
import {ClientPageComponent} from "./client-page/client-page/client-page.component";
import {LoanFormComponent} from "./loan-form/loan-form/loan-form.component";
import {OfficerLoanPageComponent} from "./officer-loan-page/officer-loan-page/officer-loan-page.component";
import {AllLoansComponent} from "./officer-all-loans-page/all-loans/all-loans.component";
import {OfficerLoanViewingPageComponent} from "./officer-loan-viewing-page/officer-loan-viewing-page/officer-loan-viewing-page.component";

const routes : Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: ClientFormComponent },
  { path: 'officer', component: OfficerPageComponent},
  { path: 'client', component: ClientPageComponent},
  { path : 'newLoan', component :LoanFormComponent},
  { path : 'editLoan', component:OfficerLoanPageComponent},
  { path : 'allLoans', component:AllLoansComponent},
  { path : 'officerLoanView', component:OfficerLoanViewingPageComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
