import { Component } from '@angular/core';

type Choices = { name: string }[];
@Component({
  // 	そのコンポーネントが他のHTMLから参照されるときのタグ名になる。
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choices: Choices = [
    { name: 'new.css' },
    { name: 'milligram' },
    { name: 'mvp' },
    { name: 'water-dark' },
    { name: 'attri-blightlight-green' },
    { name: 'attri-darkfairy-pink' },
    { name: 'attri-darkforest-green' },
    { name: 'attri-lightfairy-pink' },
    { name: 'attri-midnight-green' },
  ];
  selectedChoice = this.choices[0].name;

  setCSSRadioButton(text: string) {
    console.log(text);
    this.selectedChoice = text;
  }
}
