import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  subDisplayText = '';
  mainDisplayText = '';

  pressKey(key: string) {
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
  }
  getAnswer() {
    this.subDisplayText = this.mainDisplayText;
    this.mainDisplayText = eval(this.mainDisplayText);
  }
}
