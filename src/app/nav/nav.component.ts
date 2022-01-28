import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'AW-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Input() navComp='';

  constructor() { }

  ngOnInit(): void {
  }

}
