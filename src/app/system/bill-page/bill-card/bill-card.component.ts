import { BillService } from './../../shared/services/bill.service';
import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  public dollar: number;
  public euro: number;

  constructor(private billService: BillService) { }

  ngOnInit() {
    let { rates } = this.currency;
    // this.dollar = rates['EUR'] * this.bill.value
    // this.euro = rates['EUR'] * this.bill.value;
    this.dollar = 0.015 * this.bill.value;
    this.euro = 0.014 * this.bill.value;
  }

}
