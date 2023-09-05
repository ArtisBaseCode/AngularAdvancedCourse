import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Artis';
  number = 54;
  isClicked = false;

  onClick(){
    this.isClicked = !this.isClicked;
  }
}
