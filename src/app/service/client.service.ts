import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs/Observable';
import {Loan} from "../model/loan";


@Injectable()
export class ClientService {

  private addClientUrl: string;
  private clientLoginUrl : string;
  private client : Client;
  private clientLoansUrl : string;
  private loanUrl : string;
  private loggedIn : boolean = false;;

  constructor(private http: HttpClient) {
    this.addClientUrl = 'http://localhost:8080/bank/addClient';
    this.clientLoginUrl = 'http://localhost:8080/bank/clientLogin';
    this.clientLoansUrl = 'http://localhost:8080/bank/loans/';
    this.loanUrl = 'http://localhost:8080/bank/addLoan';
  }

  public save(client : Client) {
    return this.http.post<Client>(this.addClientUrl, client);
  }

  public clientLogin(username : string, password : string){
    return this.http.get(this.clientLoginUrl + '/' + username + "/" + password);
  }
  public setLoggedInClient(client : any){
    this.client = client;
  }
  public getLoggedInClient(){
    return this.client;
  }
  public logoutClient(){
    this.client = null;
  }
  public findClientLoans(id : string): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.clientLoansUrl + id);
  }

  public saveLoan(loan: Loan) {
    return this.http.post<Loan>(this.loanUrl, loan);
  }

  public setLoggedIn(value : boolean){
    this.loggedIn = value;
  }
  public getLoggedIn(){
    return this.loggedIn;
  }
}
