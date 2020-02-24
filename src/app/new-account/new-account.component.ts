import { Component} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers:[LoggingService] //Angular uses this to recognise the dependency needed
  //AccountsService provider should not be provided here in order to keep single instance of it.
  //This is already instantiated in parent app module
})
export class NewAccountComponent {
 

  //Injecting logging service using dependency injection so that the dependency is injected.
  loggingService:LoggingService;
  accountService:AccountsService;

  constructor(loggingService:LoggingService,accountService:AccountsService){
      this.loggingService=loggingService;
      this.accountService=accountService;

      //Listen to event updates from account-component through account servivce
      this.accountService.statusUpdated.subscribe((status:string)=>{
        alert('New status:'+status);
      });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    //Below is not an ideal approach to call a service
    //const newService = new LoggingService();
    //newService.logStatusChanged(accountStatus);

    //This the better approach where dependency is injected to the component
    //Angular creates the instance of this dependency
    this.loggingService.logStatusChanged(accountStatus);
  }
}
