import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amplify-sign-up-demo',
  templateUrl: 'sign-up.component.html',
})
export class AmplifySignupComponent implements OnInit {
  @Input() signInType: string = '';
  objectValue: any;

  isError: boolean = false;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  SignIn(value: string) {
    this.isError = true;
    this.errorMessage = 'User does not exist.';
  }

  onInput(event: Event) {
    event.preventDefault();
    const { name, value } = <HTMLInputElement>event.target;
    this.objectValue[name] = value;
  }

  onSubmit(event: Event) {
    this.router.navigate(['./demo/confirmation']);
  }
}
