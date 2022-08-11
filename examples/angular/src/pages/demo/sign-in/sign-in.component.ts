import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'amplify-button-demo',
  templateUrl: 'sign-in.component.html',
})
export class AmplifySignInComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      alert(data['type']);
    });
  }
}
