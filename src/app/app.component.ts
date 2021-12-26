import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-calculator-app';
  subDisplayText = '';
  mainDisplayText = '';
  values = new Array<string>();
  operators = new Array<string>('+', '-', '*', '/', '.');

  pressKey(key: string) {
    if (this.operators.includes(key) && (this.values.length === 0 || this.operators.includes(this.values[this.values.length - 1]))) {
      return;
    }

    this.values.push(key);
    this.mainDisplayText = this.values.join('');
  }

  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.values = [];
  }

  getAnswer() {
    if (this.operators.includes(this.values[this.values.length - 1])) {
      this.values.pop();
    }

    this.subDisplayText = this.values.join('');
    this.mainDisplayText = eval(this.subDisplayText);
    this.values = [];
    this.values.push(this.mainDisplayText);
  }
}
