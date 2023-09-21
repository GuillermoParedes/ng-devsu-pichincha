
import { FormControl, ValidationErrors } from '@angular/forms';

const validateMessages: ValidationErrors = {
    idExists: 'You can not repeat ID',
    required: 'The field is required',
    minlength: ({ requiredLength }: { requiredLength: number }) => `The field needs min length of ${requiredLength} character(s)`,
    maxlength: ({ requiredLength }: { requiredLength: number }) => `The field needs max length og ${requiredLength} character(s)`,
    noDateInFuture: 'Fecha no puede ser antes de hoy',
  
    other: 'Error en el campo',
  }
  
  export const getValidationMessage = (error: ValidationErrors): string => {
    const errorKeys = Object.keys(error);
    let messages: string = '';
  
    errorKeys.forEach((errorName: string) => {
      const validationMessage = validateMessages[errorName];
      if (typeof validationMessage === 'function') {
        messages = validationMessage(error[errorName]);
      } else {
        messages = validationMessage || validateMessages['other'];
      }
    });
  
    return messages;
  }