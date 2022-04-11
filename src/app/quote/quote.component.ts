import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Find an online version and watch merlin find his son', 'fdsgsg',new Date(2024,1,26)),
    new Quote(2, 'I have to buy cookies for the parrot', 'fsdgg',new Date(2022,7,19),),
    new Quote(3, 'Diana has her birthday coming up soon', 'reare',new Date(2022,6,12)),
    new Quote(4, 'Pupper likes expensive snacks', 'at hgjjve',new Date(2022,4,23))]

    deleteQuote(isComplete, index){
     if (isComplete) {
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

       if (toDelete){
         this.quotes.splice(index,1)
       }
     }
   }

  constructor() { }

  ngOnInit(): void {
  }

}
