import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerRemove } from 'src/app/customer/customer.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private store: Store< { customers: Customer[] } >) {
    this.customers = store.pipe(select('customers'));
  }

  ngOnInit() {
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

}
