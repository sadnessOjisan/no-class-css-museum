import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// q: ng generateでOnInit は自動生成されたがなぜ？必須？

type Choices = { name: string }[];

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
})
export class ChoicesComponent implements OnInit {
  isOpen: boolean = false;
  @Input() choices: Choices;
  @Input() selectedChoice: string;
  @Output() selectCSS: EventEmitter<string> = new EventEmitter();

  // Q: constructorは何に使うの？
  constructor() {}

  ngOnInit(): void {}

  change(name: string) {
    this.selectCSS.emit(name);
    this.isOpen = false;
  }

  toggleOpener() {
    this.isOpen = !this.isOpen;
  }
}
