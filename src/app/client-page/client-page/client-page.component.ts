import { Component, OnInit } from '@angular/core';
import { Client} from "../../model/client";
import {Loan} from "../../model/loan";
import {ClientService} from "../../service/client.service";
import { ActivatedRoute, Router } from '@angular/router';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  loans : Loan[];
  client : Client;

  constructor(private clientService : ClientService, private router : Router, private appComponent : AppComponent) { }

  ngOnInit() {
    this.client = this.clientService.getLoggedInClient();
    this.clientService.findClientLoans(this.client.id).subscribe(value =>{
      this.loans = value;
    })
  }

  onLoanRequest() {
    this.router.navigate(['/newLoan']);

  }

  onLogoutRequest() {
    this.clientService.setLoggedInClient(null);
    this.clientService.setLoggedIn(false);
    this.appComponent.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
