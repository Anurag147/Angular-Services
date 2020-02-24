import { Injectable,EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

//This service is used to hold accounts data
@Injectable() //Use this injectable when you want to use a service inside a service
export class AccountsService{
    //Example of using a service inside a service
    loggingService:LoggingService;
    constructor(loggingService:LoggingService){
        this.loggingService=loggingService;
    }
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      //Below event emitter is used for cross component event listening through services
      statusUpdated = new EventEmitter<string>();

      addAccount(name:string, status:string){
        this.accounts.push({name: name,status: status});
      }

      updateStatus(id:number, status:string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged("Calling from account service");
      }
}