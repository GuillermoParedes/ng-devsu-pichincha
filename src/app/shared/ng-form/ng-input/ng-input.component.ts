import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getValidationMessage } from 'src/app/core/validators/validation-message';

@Component({
  selector: 'codevs-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.scss']
})
export class NgInputComponent {

  @Input() form!: FormGroup;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() formName: string = '';
  @Input() type: string = 'text';

  get isInvalidField(): boolean {
    return (this.form.get(this.formName)?.touched && !this.form.get(this.formName)?.valid) as boolean;
  }

  get getErrorMessage(): string {
    const error = this.form.get(this.formName)?.errors;
    return error ? getValidationMessage(error) : '';
  }
}
