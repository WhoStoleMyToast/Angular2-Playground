import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/observable/of';

@Component({
  selector: 'demo-typeahead-forms',
  templateUrl: './demo-typeahead-static-component.component.html',
  styleUrls: ['./demo-typeahead-static-component.component.scss']
})
export class DemoTypeaheadFormsComponent {
  @ViewChild('myInput') input; 
  public stateCtrl: FormControl = new FormControl();

  public myForm: FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  public states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];

  triggerDelete() {
    let event = new KeyboardEvent("keyup", {
      key : "0"
    });

    this.input.nativeElement.dispatchEvent(event);
  }
}