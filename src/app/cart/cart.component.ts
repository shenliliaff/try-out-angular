import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private caerService:CartService,
    private fromBuilder:FormBuilder,
  ) { 
    this.checkoutForm = this.fromBuilder.group({
      name:'',
      address:'',
    })
  }

  ngOnInit() {
    this.items = this.caerService.getItems();
  }

  onSubmit(customerData){
    //Process checkout data here
    this.items = this.caerService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted',customerData);
  }

}