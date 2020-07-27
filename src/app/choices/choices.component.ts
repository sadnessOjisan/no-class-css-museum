import { Component, OnInit } from '@angular/core';

// q: ng generateでOnInit は自動生成されたがなぜ？必須？

type Choices = { name: string }[];

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
})
export class ChoicesComponent implements OnInit {
  choices: Choices = [{ name: 'new.css' }, { name: 'miligram' }];
  schoice = this.choices[0].name;

  // Q: constructorは何に使うの？
  constructor() {}

  ngOnInit(): void {}

  show(i: number) {
    console.log('selected: ' + this.choices[i].name);
  }
}
