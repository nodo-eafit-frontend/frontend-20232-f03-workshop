import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  type: string = 'png';
  name: string = 'sombrero-de-cocinero';

  get path(): string {
    return `${this.name}.${this.type}`;
  }
}
