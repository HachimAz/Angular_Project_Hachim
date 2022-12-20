import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(credentials: any) {
    console.log('Parent ', credentials);
    this.userService.login(credentials).subscribe({
      next: (data) => {
        localStorage.setItem('token', data['access_token']);
        this.userService.setLogin();
        this.router.navigateByUrl('/admin/playersControl');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
