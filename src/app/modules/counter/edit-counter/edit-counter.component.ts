import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterControlService } from '../../../shared/counter-control.service';

@Component({
  selector: 'ngApp-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  @Output() showAlert: EventEmitter<boolean> = new EventEmitter();
  disactivebtn: boolean = false;
  counter!: number;

  constructor(private counterControlService: CounterControlService) {}

  ngOnInit(): void {
    this.counterControlService
      .getCounter()
      .subscribe((value) => (this.counter = value));
  }

  ngOnChange() {}

  inputChange(amount: number) {
    if (amount - this.counter <= 0) {
      this.disactivebtn = false;
      this.showAlert.emit(false);
    } else {
      this.disactivebtn = true;
      this.showAlert.emit(true);
    }
  }

  add(amount: number) {
    this.counterControlService.addAmount(amount);
  }

  sub(amount: number) {
    this.counterControlService.subAmount(amount);
  }
}
