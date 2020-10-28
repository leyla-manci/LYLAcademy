import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warninng(message);
  }
  notify(message:string,messageType:string){
    var notification = alertify.notify(message, messageType, 3, function(){  console.log('dismissed'); });
    }
}
