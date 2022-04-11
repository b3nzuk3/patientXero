import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Watch finding Nemo', description: 'Find an online version and watch merlin find his son' },
    { id: 2, name: 'Buy Cookies', description: 'I have to buy cookies for the parrot' },
    { id: 3, name: 'Get new Phone Case', description: 'Diana has her birthday coming up soon' },
    { id: 4, name: 'Get Dog Food', description: 'Pupper likes expensive sancks'}]
  constructor() {}

  ngOnInit(): void {
    }

}
