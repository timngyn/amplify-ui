import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amplify-confirmation-demo',
  templateUrl: 'confirmation.component.html',
})
export class AmplifyConfirmationComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  onInput(event: Event) {
    event.preventDefault();
    const { name, value } = <HTMLInputElement>event.target;
  }

  onSubmit(event: Event) {
    this.router.navigate(['./demo/home']);
  }
}
