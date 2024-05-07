import { Component } from '@angular/core';
import {KeyComponent} from "../key/key.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-piano-keys',
  standalone: true,
  imports: [
    KeyComponent,
    NgForOf
  ],
  templateUrl: './piano-keys.component.html',
  styleUrl: './piano-keys.component.css'
})
export class PianoKeysComponent {
  keys = [
    { note: 'Do', isWhite: true },
    { note: 'Do#', isWhite: false },
    { note: 'Re', isWhite: true },
    { note: 'Re#', isWhite: false },
    { note: 'Mi', isWhite: true },
    { note: 'Fa', isWhite: true },
    { note: 'Fa#', isWhite: false },
    { note: 'Sol', isWhite: true },
    { note: 'Sol#', isWhite: false },
    { note: 'La', isWhite: true },
    { note: 'La#', isWhite: false },
    { note: 'Si', isWhite: true },
    { note: 'Do', isWhite: true },
    { note: 'Do#', isWhite: false },
    { note: 'Re', isWhite: true },
    { note: 'Re#', isWhite: false },
    { note: 'Mi', isWhite: true },
    { note: 'Fa', isWhite: true },
    { note: 'Fa#', isWhite: false },
    { note: 'Sol', isWhite: true },
    { note: 'Sol#', isWhite: false },
    { note: 'La', isWhite: true },
    { note: 'La#', isWhite: false },
    { note: 'Si', isWhite: true }

  ];
}
