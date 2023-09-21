import { Component, Input } from '@angular/core';

@Component({
  selector: 'codevs-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss']
})
export class NgButtonComponent {

  @Input() label: string = ''

  @Input() type: 'submit' | 'button' = 'button'

  @Input() className: string = '';

  @Input() disabled: boolean = false;
  
}
