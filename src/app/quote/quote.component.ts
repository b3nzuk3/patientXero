import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Quote(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
    new Quote(3, 'Get new Phone Case', 'Diana has her birthday coming up soon'),
    new Quote(4, 'Get Dog Food', 'Pupper likes expensive snacks')]

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}