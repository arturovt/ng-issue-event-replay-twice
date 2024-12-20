import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onLoad(): void {
    console.error('onLoad....');
  }
}
