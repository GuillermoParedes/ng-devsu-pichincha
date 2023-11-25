import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'codevs-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent implements OnInit {
  @Input() schema: any;
  @Input() initialValues?: any;
  @Input() returnToBack: string = '/'
  @Output() onSubmit = new EventEmitter<any>();


  formSchema: any;


  constructor(private readonly fb: FormBuilder) {}


  ngOnInit() {
    this.generateForm()
  }

  generateForm() {
    const objFormGroup:any = {};

    this.schema.forEach((element: any) => {
      const validations = this.getValidationInput(element)
      const customValidations = this.getCustomValidationInput(element)
      if(validations.length > 0) {
        objFormGroup[element.property] = [null, validations, customValidations]
      }
    });
    this.formSchema = this.fb.group(objFormGroup)
  }

  getValidationInput(inputElement: any) {
    const validation: any = [];

    inputElement.validations.forEach((element: any) => {
        console.log('element', element)
      if(element.required) {
        validation.push(Validators.required)
      }
      if(element.min) {
        validation.push(Validators.min(element.min))
      }
      if(element.max) {
        validation.push(Validators.max(element.max))
      }
      if(element.minLength && element.minLength > 0) {
        validation.push(Validators.minLength(element.minLength))
      }
      if(element.maxLength && element.maxLength > 0) {
        validation.push(Validators.maxLength(element.maxLength))
      }
      if(element.regEx) {
        validation.push(Validators.pattern(element.regEx))

      }
    });

    return validation;

  }

  getCustomValidationInput(inputElement: any) {
    const validation: any = [];
   
    if(inputElement.customValidation) {
      validation.push(inputElement.customValidation)
    }

    return validation;
  }


  onSave() {
    this.onSubmit.next(this.formSchema.value)
  }

  resetForm() {
    console.log('reset form')
    this.formSchema.reset();
  }

}
