import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any;
  constructor(public service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((response:any)=>{
      this.list=response;
      console.log(this.list);
    });
  }

}
