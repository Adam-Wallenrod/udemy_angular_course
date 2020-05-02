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


  @Input() options: OptionType;
  @Input() isDisabled = false;
  @Output() selectionChange = new EventEmitter<MulticheckboxListSelectionChangeEv>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngOnInit() {
  }


  isChecked(option: OptionType) {
    return this.currentDataModel && this.currentDataModel.find((x: number) => x === option.value);
  }


  onChange(ev: MatCheckboxChange, option: OptionType) {
    let newModel;

    this.currentDataModel = this.currentDataModel || [];

    if (ev.checked === true) {
      newModel = [...this.currentDataModel.filter(x => x !== option.value), option.value];
    } else {

      newModel = [...this.currentDataModel.filter(x => x !== option.value)];
    }


    this.selectionChange.emit({
      checkboxEvent: ev,
      option: option
    });

    this.propagateChange(newModel);
    this.currentDataModel = newModel;

  }


  writeValue(obj: any): void {
    this.currentDataModel = obj;
    console.log('write : value --> ', obj);
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
