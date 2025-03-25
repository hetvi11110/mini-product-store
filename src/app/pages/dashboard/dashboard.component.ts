import { Component, inject, signal } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component'
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [UserCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  users = signal<User[]>([]);
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      this.users.set(res);
    });
  }

}
