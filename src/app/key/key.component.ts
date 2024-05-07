import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent {
  @Input() isWhite: boolean = true;
  @Input() note: string = 'Do';
}
