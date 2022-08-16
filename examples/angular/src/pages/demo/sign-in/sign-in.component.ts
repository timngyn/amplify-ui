import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amplify-button-demo',
  templateUrl: 'sign-in.component.html',
})
export class AmplifySignInComponent implements OnInit {
  signInType: 'username' | 'phone' | 'usernameSignUp' | 'phoneSignUp' =
    'username';

  objectValue: { username: string; password: string } = {
    username: '',
    password: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  isError: boolean = false;
  errorMessage: string = 'User does not exist.';

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.signInType = data['type'];
    });
  }

  onInput(event: Event) {
    event.preventDefault();
    const { name, value } = <HTMLInputElement>event.target;
    if (name == 'username') this.objectValue['username'] = value;
    else this.objectValue['password'] = value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.objectValue['username'] == 'error') this.isError = true;
    else this.router.navigate(['./demo/home']);
  }
}
