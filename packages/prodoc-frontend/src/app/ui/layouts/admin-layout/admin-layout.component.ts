import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/api/user.service';
import { AuthService } from 'app/services/auth/auth.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit {

  constructor(public authService: AuthService, private userService: UserService) { }

  ngOnInit() { 

    this.userService.getMe().subscribe(res => {

      this.authService.currentUser = res.data;

    });

  }
}
