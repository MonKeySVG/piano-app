import { Component } from '@angular/core';
import {PianoKeysComponent} from "../piano-keys/piano-keys.component";

@Component({
  selector: 'app-piano',
  standalone: true,
  imports: [
    PianoKeysComponent
  ],
  templateUrl: './piano.component.html',
  styleUrl: './piano.component.css'
})
export class PianoComponent {

}
