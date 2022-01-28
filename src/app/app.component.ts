import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'AW-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnnWitt';
  item='DUUUUPAAAA Input z komponentu app component do komponentu article';
}

// @Input() lets a parent component update data in the child component. Conversely, 
// @Output() lets the child send data to a parent component.
// The @Input() decorator in a child component or directive signifies that the
// property can receive its value from its parent component.