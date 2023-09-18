import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //constructor(public userService: UsersService, public router: Router) {}
  constructor(public router: Router) {}

  login() {
    // const user = { email: this.email, password: this.password };
    // this.userService.login(user).subscribe(
    //   data => {
    //     this.userService.setToken(data.token);
    //     this.router.navigateByUrl("/");
    //   },
    //   error => {
    //     console.log(error);
    //   }

      this.router.navigateByUrl("principal");

    }

}
