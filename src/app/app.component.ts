import { Component, OnInit } from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers:[AccountsService]
  //AccountsService provider should not be provided here in order to keep single instance of it.
  //This is already instantiated in parent app modul
})
export class AppComponent implements OnInit {
  
  //Local variable to retrieve and store accounts details from AccountService
  accounts: {name: string, status:string}[] = [];
  accountService:AccountsService;

  constructor(accountService:AccountsService) {
    this.accountService=accountService;
  }

  ngOnInit(){
    this.accounts=this.accountService.accounts;
  }
}
