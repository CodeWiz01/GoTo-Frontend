import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuClosed:boolean=true;
  constructor(){}
  openMenu(){
    this.menuClosed=!this.menuClosed;
  }
}
