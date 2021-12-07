import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl="https://localhost:44359/Api/Users"
  
  constructor(private http:HttpClient) { }
  


  getAllCustomers(){
    return this.http.get(this.baseUrl + "/getall");  
  }
}
