import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amplify-button-demo',
  templateUrl: 'sign-in.component.html',
})
export class AmplifySignInComponent implements OnInit {
  signInType: 'username' | 'phone' | 'usernameSignUp' | 'phoneSignUp' =
    'username';

  objectValue: any;

  constructor(private activatedroute: ActivatedRoute) {}

  isError: boolean = false;
  errorMessage: string = '';
  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.signInType = data['type'];
    });
  }

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
    if (this.objectValue['Username'] == '') alert('username');
  }

  CreateAccount(value: string) {
    alert('value ' + value);
  }
}
