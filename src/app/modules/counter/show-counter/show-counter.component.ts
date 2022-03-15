import { Component, OnInit } from '@angular/core';
import { CounterControlService } from '../../../shared/counter-control.service';

@Component({
  selector: 'ngApp-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css'],
})
export class ShowCounterComponent implements OnInit {
  showCounter!: number;

  constructor(private counterControlService: CounterControlService) {}

  ngOnInit(): void {
    this.counterControlService
      .getCounter()
      .subscribe((value) => (this.showCounter = value));
  }

  addOne() {
    this.counterControlService.addOne();
  }
  subOne() {
    this.counterControlService.subOne();
  }
}
