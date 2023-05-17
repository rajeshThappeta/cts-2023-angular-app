import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { 
    console.log("service created")
  }

  testMethod():string{
    return "test result"
  }
}
