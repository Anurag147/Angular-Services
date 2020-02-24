//This is a logging service class
export class LoggingService {
    logStatusChanged(status:string){
        console.log('A server status changed, new status: ' + status); 
    }
}