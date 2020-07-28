import { Component } from '@angular/core';
import NO_CLASS_CSS_FWS, { CSS_FW_NAME_TYPE } from './NO_CLASS_CSS_FW';

@Component({
  // 	そのコンポーネントが他のHTMLから参照されるときのタグ名になる。
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choices = NO_CLASS_CSS_FWS;
  selectedChoice = this.choices[0].name;

  setCSSRadioButton(text: CSS_FW_NAME_TYPE) {
    console.log(text);
    this.selectedChoice = text;
  }
}
