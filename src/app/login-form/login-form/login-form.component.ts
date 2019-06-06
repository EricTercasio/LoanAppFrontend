import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client";
import {LoanOfficerService} from "../../service/loan-officer.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  client : Client;
  error : boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private clientService : ClientService,
              private loanOfficerService : LoanOfficerService, private appComponent : AppComponent) {
    this.client = new Client();

  }

  onOfficerLogin() {
    this.loanOfficerService.officerLogin(this.client.username,this.client.password).subscribe(value =>{
      console.log(value);
      if(value != null){
        console.log("Success.");
        this.loanOfficerService.setLoggedInOfficer(value);
        this.appComponent.setLoggedIn(true);
        this.goToOfficerPage();
      }else{
        console.log("failure");
        this.error = true;
      }
    },error1 => this.error = true)

  }

  onClientLogin() {
    this.clientService.clientLogin(this.client.username, this.client.password).subscribe(value =>{
      console.log(value);
      if(value != null){
        console.log("Success.");
        this.clientService.setLoggedInClient(value);
        this.appComponent.setLoggedIn(true);
        this.goToClientPage();
      }else{
        console.log("failure");
        this.error = true;
      }
    },error1 => this.error = true)
  }
  goToClientPage(){
    this.router.navigate(['/client'])
  }

  goToOfficerPage(){
    this.router.navigate(['/officer'])
  }

}

