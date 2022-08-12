import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amplify-button-demo',
  templateUrl: 'sign-in.component.html',
})
export class AmplifySignInComponent implements OnInit {
  signInType:
    | 'username'
    | 'phone'
    | 'usernameSignUp'
    | 'usernameSignUp'
    | 'phoneSignUp'
    | 'phoneSignUp'
    | 'confirmCode' = 'username';

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
    this.errorMessage = 'Enter valid cred';
  }

  CreateAccount(value: string) {
    alert('value ' + value);
  }
}
