import { Component, signal } from '@angular/core';
import { CurrentYearPipe } from '../../pipes/current-year.pipe';

@Component({
  selector: 'app-footer',
  imports: [CurrentYearPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copyright = signal('© copyright');
}
