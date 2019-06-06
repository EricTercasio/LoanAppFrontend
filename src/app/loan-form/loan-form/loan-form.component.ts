import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/client";
import {Loan} from "../../model/loan";
import {ClientService} from "../../service/client.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent{

  client : Client;
  loan : Loan;
  error : boolean = false;

  constructor(private clientService : ClientService, private router : Router) {
    this.client = this.clientService.getLoggedInClient();
    this.loan = new Loan();
  }
  onSubmit(){
    this.loan.clientId = this.client.id;
    this.loan.clientName = this.client.name;
    this.loan.clientSSN = this.client.ssn;
    this.loan.clientEmail = this.client.email;
    this.loan.status = "pending";
    this.clientService.saveLoan(this.loan).subscribe(value =>{
      if(value != null){
        this.goToClientPage();
      }else{
        console.log("...");
        this.error = true;
      }

    },error1 => this.error = true)
  }

  goToClientPage(){
    this.router.navigate(['/client'])
  }

}
