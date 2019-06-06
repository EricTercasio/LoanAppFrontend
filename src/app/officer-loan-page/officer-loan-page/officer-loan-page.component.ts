import { Component, OnInit } from '@angular/core';
import {Loan} from "../../model/loan";
import {LoanOfficerService} from "../../service/loan-officer.service";
import {LoanOfficer} from "../../model/loan-officer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-officer-loan-page',
  templateUrl: './officer-loan-page.component.html',
  styleUrls: ['./officer-loan-page.component.css']
})
export class OfficerLoanPageComponent{

  loan : Loan;
  officer : LoanOfficer;
  error : boolean = false;

  constructor(private officerService : LoanOfficerService, private router : Router) {
    this.officer = officerService.getLoggedInOfficer();
    this.loan = officerService.getLoanToEdit();
  }

  onSubmit(){
    this.officerService.editLoan(this.loan).subscribe(value =>{
      if(value != null) {
        this.goToOfficerPage();
      }else{
        this.error = true;
        console.log("error");
      }
    },error1 => this.error = true)
  }

  private goToOfficerPage() {
    this.router.navigate(['/officer']);
  }
}
