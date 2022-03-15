import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCounterComponent } from './show-counter/show-counter.component';

@NgModule({
  declarations: [ShowCounterComponent],
  imports: [CommonModule],
  exports: [ShowCounterComponent],
})
export class CounterModule {}
