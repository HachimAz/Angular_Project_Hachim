import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css'],
})
export class NavbarBackComponent {
  constructor(private userService: UserService, private router: Router) {}
  click() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }
}
