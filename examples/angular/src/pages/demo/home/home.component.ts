import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amplify-home-demo',
  templateUrl: 'home.component.html',
})
export class AmplifyHomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  signout() {
    this.router.navigate(['./demo/sign-in']);
  }
}
