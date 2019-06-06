import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoanOfficer} from "../model/loan-officer";
import {Observable} from "rxjs";
import {Loan} from "../model/loan";

@Injectable()
export class LoanOfficerService {

  private officerLoginUrl : string;
  private allLoansUrl : string;
  private allPendingLoansUrl : string;
  private loanOfficer : LoanOfficer;
  private loanToEdit : Loan;
  private editLoanUrl : string;
  private loggedIn : boolean = false;

  constructor(private http: HttpClient) {
    this.officerLoginUrl = 'http://localhost:8080/bank/officerLogin';
    this.allLoansUrl = 'http://localhost:8080/bank/getAllLoans';
    this.allPendingLoansUrl = 'http://localhost:8080/bank/getPendingLoans';
    this.editLoanUrl = 'http://localhost:8080/bank/editLoan';
  }
  public setLoggedInOfficer(loanOfficer : any){
    this.loanOfficer = loanOfficer;
  }
  public getLoggedInOfficer(){
    return this.loanOfficer;
  }

  public officerLogin(username : string, password : string){
    return this.http.get(this.officerLoginUrl + '/' + username + "/" + password);
  }

  public editLoan(loan : Loan){
    return this.http.post(this.editLoanUrl,loan);
  }

  public findAllPendingLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.allPendingLoansUrl);
  }

  findAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.allLoansUrl);

  }

  public setLoanToEdit(loan : Loan){
    this.loanToEdit = loan;
}
  public getLoanToEdit(){
    return this.loanToEdit;
  }


  public setLoggedIn(value : boolean){
    this.loggedIn = value;
  }
  public getLoggedIn(){
    return this.loggedIn;
  }

}
