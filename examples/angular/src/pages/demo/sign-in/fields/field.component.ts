import { Component, Input, OnInit } from '@angular/core';
import fields from '../../shared/fields.json';

@Component({
  selector: 'amplify-fields',
  templateUrl: 'field.component.html',
})
export class AmplifyFieldComponent implements OnInit {
  @Input() fieldType:
    | 'username'
    | 'phone'
    | 'usernameSignUp'
    | 'usernameSignUp'
    | 'phoneSignUp'
    | 'phoneSignUp' = 'usernameSignUp';

  @Input() InputObject = {};

  fieldValues = fields;
  title = fields[this.fieldType]['title'];
  description = fields[this.fieldType]['description'];
  fieldStaticData: any;

  ngOnInit() {
    this.fieldStaticData = this.fieldValues[this.fieldType]['fields'];
  }
}
