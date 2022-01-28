import { NgClass } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'AW-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})



export class ArticleComponent implements OnInit {
  @Input() itemArticle='';
  @Input() zZadan='';


  constructor() {
   }

  annestokes: string=" (tekst ze zmiennej z art.ts) Jej ilustracje trafiły na koszulki wielu zespołów, a t-shirt ze wzorem Skull Tatoo pojawił się w filmie Tima Burtona \"Charlie i fabryka czekolady\". Jej pozycję ugruntowały zlecenia na wykonanie szeregu concept artów i ilustracji dla Wizards of the Coast czy Dungeons & Dragons. Obecnie tworzy własne, licencjonowane wzory dostępne w szerokiej gamie produktów takich jak kubki, koszulki, plakaty, rzeźby, okładki książek, kalendarze, układanki, karty, biżuteria i pocztówki.";
  styleClassNumber: number=0;
  CustomStyleClass=null;
  someNumber: number=0;
  clickBoolean: boolean=false;
  forStyleChanging: string=" Klikam sobie na przyciski i zmieniam formatowanie"


  // 8. a) Za pomocą dyrektyw atrybutów ngClass lub ngStyle zmień dowolnie
  // wygląd wyświetlanego tekstu w komponencie article

  ngOnInit(): void {
    
  }


}

