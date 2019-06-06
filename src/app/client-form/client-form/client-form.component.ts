import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/client";

@Component({
  selector: 'app-user-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  client : Client;
  error : boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private clientService : ClientService) {
    this.client = new Client();
  }

  onSubmit() {
    this.clientService.save(this.client).subscribe(result => this.gotoLogin(),error1 => this.error = true);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
