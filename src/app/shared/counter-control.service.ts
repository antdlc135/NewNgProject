import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterControlService {
  private counter = 0;

  counterSubject = new BehaviorSubject<number>(this.counter);
  counter$ = this.counterSubject.asObservable();
  constructor() {}

  getCounter(): Observable<number> {
    return this.counter$;
  }

  addOne() {
    this.counter = this.counter + 1;
    this.counterSubject.next(this.counter);
    console.log(this.counter);
  }

  subOne() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
      this.counterSubject.next(this.counter);
      console.log(this.counter);
    } else {
      console.log('Non puoi più sottrarre!!!');
    }
  }

  addAmount(amount: number) {
    this.counter = this.counter + amount;
    this.counterSubject.next(this.counter);
  }

  subAmount(amount: number) {
    this.counter = this.counter - amount;
    this.counterSubject.next(this.counter);
  }
}
