import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  private authService = inject(AuthService);
  login() {
    if (!this.authService.login(this.username, this.password)) {
      alert('Invalid Credentials!');
    }
  }

}
