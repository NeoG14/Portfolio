import { Component, inject } from '@angular/core';
import { interval, map, take } from 'rxjs';
import { TypewriterService } from '../typewriter.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typewriter.component.html',
  styles: ``
})
export class TypewriterComponent {
  titles = ["Full-Stack Developer", "Computer Science Student", "Tech Lover"];

  private typewriter = inject(TypewriterService);

  typedText$ = this.typewriter
  .getTypewriterEffect(this.titles)
  .pipe(map((text) => text));
}
