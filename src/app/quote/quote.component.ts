import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Find an online version and watch merlin find his son', 'Learnado Davinci','Anna','Science',new Date(2024,1,26), 0, 0),
    new Quote(2, 'I have to buy cookies for the parrot', 'fsdgg','james','Art',new Date(2022,7,19),0,0),
    new Quote(3, 'Diana has her birthday coming up soon', 'reare','Alan','Life',new Date(2022,6,12),0,0),
    new Quote(4, 'Pupper likes expensive snacks', 'at hgjjve','Klaus','Romance',new Date(2022,4,23),0,0)]

    deleteQuote(isComplete, index){
     if (isComplete) {
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

       if (toDelete){
         this.quotes.splice(index,1)
       }
     }
   }

   addNewQuote(quote){
       let goalLength = this.quotes.length;
       quote.id = goalLength+1;
       quote.completeDate = new Date(quote.completeDate)
       this.quotes.push(quote)
     }

  constructor() { }

  ngOnInit(): void {
  }

}
