import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  constructor(public userService: UserService, public router: Router) {}

  login() {
    const user = { username: this.username, password: this.password };
    if (user.username.trim() == "" || user.password.trim()==""){
      alert("falta ingresar datos");
      return;
    }
    this.userService.login(user).subscribe(
      data => {
        //this.userService.setToken(data.token);
        this.router.navigateByUrl("principal");
      },
      error => {
        alert("Alguno de los datos es incorrecto");
        console.log(error);
      }
    );
  }
}
