import { Component } from '@angular/core';

@Component({
  // 	そのコンポーネントが他のHTMLから参照されるときのタグ名になる。
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}
