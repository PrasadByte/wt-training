import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css'
})
export class CounterApp {
  counter:number=0
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }

}
