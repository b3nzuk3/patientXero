import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Simplicity is the ultimate sophistication', 'Learnado Davinci','Anna','Science',new Date(2020,1,26), 0, 0),
    new Quote(2, 'Art is chaos taking shape','Pablo Picasso','james','Art',new Date(2021,7,19),0,0),
    new Quote(3, 'If life were predictable it would cease to be life, and be without flavor.', 'Eleanor Roosevelt','Alan','Life',new Date(2021,6,12),0,0),
    new Quote(4, 'A sky full of stars and he was staring at her.', 'Atticus','Klaus','Romance',new Date(2021,4,23),0,0)]


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

     get Quote(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date (b.completeDate) - <any>new Date(a.completeDate)
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
