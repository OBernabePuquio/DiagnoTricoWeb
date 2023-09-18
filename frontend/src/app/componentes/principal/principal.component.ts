import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}


  changeRoute(evt: MouseEvent, name: string) {
    evt.preventDefault();

    let navcfg = [{ outlets: { secondary: name } }];

    this.router.navigate(navcfg, {
      skipLocationChange: false,
    });
  }

}
