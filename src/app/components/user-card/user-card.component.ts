import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-user-card',
  imports: [TitleCasePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = input.required<User>();
}
