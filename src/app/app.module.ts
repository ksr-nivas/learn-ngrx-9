import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer/customer.reducer';

import { AppComponent } from './app.component';
import { CustomerAddComponent } from './views/customer-add/customer-add.component';
import { CustomersComponent } from './views/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({customers: CustomerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
