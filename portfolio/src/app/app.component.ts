import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypewriterComponent } from "./typewriter/typewriter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypewriterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
