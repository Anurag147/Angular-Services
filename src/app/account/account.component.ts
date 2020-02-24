import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers:[LoggingService] //Angular uses this to recognise the dependency needed
  //AccountsService provider should not be provided here in order to keep single instance of it.
  //This is already instantiated in parent app module
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 

  //Injecting logging service using dependency injection so that the dependency is injected.
  loggingService:LoggingService;
  accountService:AccountsService;
  constructor(loggingService:LoggingService,accountService:AccountsService){
      this.loggingService=loggingService;
      this.accountService=accountService;
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    //Emit a new event when status is changed so that all compnents which subscribed to it will get new data
    this.accountService.statusUpdated.emit(status);
    //Below is not an ideal approach to call a service
    //const newService = new LoggingService();
    //newService.logStatusChanged(accountStatus);

    //This the better approach where dependency is injected to the component
    //Angular creates the instance of this dependency
    this.loggingService.logStatusChanged(status);
  }
}
