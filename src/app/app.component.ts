import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomClass } from './random.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends RandomClass {
  title = 'decorator';
  public value = 0;

  public innerHTML = `
  <h2>How cool is that?</h2>
  `;
  ngOnInit() {
    this.value = this.getRandom();
  }
}
