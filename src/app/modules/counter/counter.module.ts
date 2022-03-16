import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCounterComponent } from './show-counter/show-counter.component';
import { EditCounterComponent } from './edit-counter/edit-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowCounterComponent, EditCounterComponent],
  imports: [CommonModule, FormsModule],
  exports: [ShowCounterComponent, EditCounterComponent],
})
export class CounterModule {}
