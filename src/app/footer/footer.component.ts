import { Component } from '@angular/core';

// @Component Decorator
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  getCurrentYear(): number {
    return this.currentYear;
  }
}
