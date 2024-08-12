import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypewriterComponent } from "./typewriter/typewriter.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypewriterComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
