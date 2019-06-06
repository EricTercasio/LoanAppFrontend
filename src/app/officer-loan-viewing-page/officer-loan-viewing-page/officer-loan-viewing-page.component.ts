import { Component, OnInit } from '@angular/core';
import {Loan} from "../../model/loan";
import {LoanOfficer} from "../../model/loan-officer";
import {LoanOfficerService} from "../../service/loan-officer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-officer-loan-viewing-page',
  templateUrl: './officer-loan-viewing-page.component.html',
  styleUrls: ['./officer-loan-viewing-page.component.css']
})
export class OfficerLoanViewingPageComponent{

  loan : Loan;
  officer : LoanOfficer;

  constructor(private officerService : LoanOfficerService, private router : Router) {
    this.officer = officerService.getLoggedInOfficer();
    this.loan = officerService.getLoanToEdit();
  }

  onSubmit(){
    this.goToOfficerPage();
  }

  private goToOfficerPage() {
    this.router.navigate(['/allLoans']);
  }
}

