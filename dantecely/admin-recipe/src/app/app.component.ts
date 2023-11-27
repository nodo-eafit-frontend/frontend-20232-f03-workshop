import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private title: string = 'Admin Recipe';

  get titlePage() {
    return `${this.title} Page`;
  }
}
