import { Component, OnInit } from '@angular/core';
import {Loan} from "../../model/loan";
import {LoanOfficer} from "../../model/loan-officer";
import {LoanOfficerService} from "../../service/loan-officer.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";


@Component({
  selector: 'app-officer-page',
  templateUrl: './officer-page.component.html',
  styleUrls: ['./officer-page.component.css']
})
export class OfficerPageComponent implements OnInit{

  loans : Loan[];
  officer : LoanOfficer;

  constructor(private officerService : LoanOfficerService, private router : Router, private appComponent : AppComponent) { }

  ngOnInit() {
    this.officer = this.officerService.getLoggedInOfficer();
    this.officerService.findAllPendingLoans().subscribe(value =>{
      this.loans = value;
    })
  }

  goToOfficerLoanPage(loan: Loan) {
    this.officerService.setLoanToEdit(loan);
    this.router.navigate(['/editLoan'])

  }

  onLogoutRequest() {
    this.officerService.setLoanToEdit(null);
    this.officerService.setLoggedInOfficer(null);
    this.appComponent.setLoggedIn(false);
    this.router.navigate(['/login']);
  }

  onChartRequest() {
    this.router.navigate(['/charts']);
  }

  onAllRequest() {
    this.router.navigate(['/allLoans']);

  }
}
