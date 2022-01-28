import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'AW-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'AnnWitt - title';
  item='Input z komponentu app component do komponentu article (item) -> app <AW-article [itemArticle]="item"></AW-article>, w art <p>{{itemArticle}}</p>';
  zmienna :string='tekst z appconent zmienna :string=';
  name: string='Moje imię to Ania'


}

