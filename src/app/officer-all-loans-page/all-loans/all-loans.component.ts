import { Component, OnInit } from '@angular/core';
import {Loan} from "../../model/loan";
import {LoanOfficer} from "../../model/loan-officer";
import {LoanOfficerService} from "../../service/loan-officer.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.css']
})
export class AllLoansComponent implements OnInit {

  loans : Loan[];
  officer : LoanOfficer;

  constructor(private officerService : LoanOfficerService, private router : Router, private appComponent : AppComponent) { }


  ngOnInit() {
    this.officer = this.officerService.getLoggedInOfficer();
    this.officerService.findAllLoans().subscribe(value =>{
      this.loans = value;
    })
  }

  onPendingRequest() {
    this.router.navigate(['/officer']);
  }

  onChartRequest() {
    this.router.navigate(['/charts']);
  }


  onLogoutRequest() {
    this.officerService.setLoanToEdit(null);
    this.officerService.setLoggedInOfficer(null);
    this.appComponent.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

  goToOfficerLoanPage(loan: Loan) {
    this.officerService.setLoanToEdit(loan);
    this.router.navigate(['/officerLoanView'])

  }
}
