import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amplify-fields',
  templateUrl: 'field.component.html',
})
export class AmplifyFieldComponent implements OnInit {
  @Input() fieldType: string = 'username';
  @Input() isSignUp: boolean = false;
  fields: any;
  fieldStaticData = {
    username: ['username', 'password'],
    phone: ['phone', 'password', 'Email'],
    usernameSignUp: ['username', 'password', 'confirmPassword', 'email'],
    phoneSignUp: ['phone', 'password', 'confirmPassword', 'email'],
  };

  ngOnInit() {
    if (!this.isSignUp)
      this.fields =
        this.fieldType == 'phone'
          ? this.fieldStaticData['phone']
          : this.fieldStaticData['username'];
    else
      this.fields =
        this.fieldType == 'phone'
          ? this.fieldStaticData['phoneSignUp']
          : this.fieldStaticData['usernameSignUp'];
  }
}
