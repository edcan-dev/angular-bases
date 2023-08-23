import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>HolaCounter</h1>
    <h3>Counter:{{ counter }}</h3>
    <button (click)="decreaseBy(1)"> -1 </button>
    <button (click)="reset()"> Reset counter </button>
    <button (click)="increaseBy(1)"> +1 </button>
  `
})

export class CounterComponent  {

  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter = this.counter + value;
  }

  decreaseBy(value: number): void {
    this.counter = this.counter - value;
  }

  reset(): void {
    this.counter = 10;
  }



}
