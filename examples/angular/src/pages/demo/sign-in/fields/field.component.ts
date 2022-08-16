import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { formFieldsMap } from '../../shared/formFieldMap';
import { FormField } from '../../shared/formFieldMap';

@Component({
  selector: 'amplify-fields',
  templateUrl: 'field.component.html',
})
export class AmplifyFieldComponent implements OnInit {
  @Input() fieldType: 'username' | 'phone' | 'usernameSignUp' | 'phoneSignUp' =
    'username';

  fieldStaticData: FormField = formFieldsMap[this.fieldType];

  ngOnInit() {
    this.fieldStaticData = formFieldsMap[this.fieldType];
  }
}
