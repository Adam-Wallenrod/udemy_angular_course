import {
  Component,
  OnInit,
  forwardRef,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material/checkbox';


export interface OptionType {
  value: number;
  label: string;
}

export interface MulticheckboxListSelectionChangeEv {
  checkboxEvent: MatCheckboxChange;
  option: OptionType;
}


@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxlistComponent),
      multi: true
    }
  ]
})
export class CheckboxlistComponent implements OnInit, ControlValueAccessor {
  private propagateChange = (_: any) => {
  };
  private currentDataModel: number[];
  isDisabled = false;

  @Input() options: OptionType;
  @Output() selectionChange = new EventEmitter<MulticheckboxListSelectionChangeEv>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngOnInit() {
    this.currentDataModel = [2];
  }


  isChecked(option: OptionType) {
    return this.currentDataModel && this.currentDataModel.find((x: number) => x === option.value);
  }


  onChange(ev: MatCheckboxChange, option: OptionType) {

  }


  writeValue(obj: any): void {
    this.currentDataModel = obj;
  }


  registerOnChange(fn: any): void {
    console.log('registerOnChange: fn --> ', fn);
    this.propagateChange = fn;
  }


  registerOnTouched(fn: any) {

  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
