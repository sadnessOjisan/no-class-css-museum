import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./new.css'],
})
export class New implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'app-template1',
  templateUrl: './template.component.html',
  styleUrls: ['./milligram.css'],
})
export class Milligram implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'mvp',
  templateUrl: './template.component.html',
  styleUrls: ['./mvp.css'],
})
export class MVP implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
