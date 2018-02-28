import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input() result: string = 'eto ung bind';
}
