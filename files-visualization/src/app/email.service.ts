import { Injectable } from '@angular/core';

// we can generate a service automatically by cli. using: ng g s email

/**
 * injectable means that in this service there is a parameter to constructor which is neeaded to be injected
 * in components we have @Component which already includes injectable in it
 */
@Injectable({ 
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
