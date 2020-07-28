import { Component } from '@angular/core';

type Choices = { name: string }[];
@Component({
  // 	そのコンポーネントが他のHTMLから参照されるときのタグ名になる。
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choices: Choices = [{ name: 'new.css' }, { name: 'miligram' }];
  selectedChoice = this.choices[0].name;

  logMessage(text: string) {
    this.selectedChoice = text;
  }
}
