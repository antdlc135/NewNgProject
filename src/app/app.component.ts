import { Component } from '@angular/core';

@Component({
  selector: 'ngApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NewNgProject';
  ctrlAlert = false;

  showAlert(ctrl: boolean) {
    this.ctrlAlert = ctrl;
  }
}
