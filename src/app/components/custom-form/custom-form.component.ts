import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomFormComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: CustomFormComponent
    },
  ]
})
export class CustomFormComponent implements OnInit,ControlValueAccessor {

  constructor(private fb:FormBuilder) { }
  quantity:number = 0;
  customForm:FormGroup=new FormGroup({});
  formBuild(){
    this.customForm = this.fb.group({
      cantidad:[0,[Validators.required,Validators.min(2)]]
    })
  }
  ngOnInit(): void {
    this.formBuild();
  }
  
  onChange = (quantity:any) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity+= 1;
      this.customForm.controls['cantidad'].setValue(this.quantity)
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity-= 1;
      this.customForm.controls['cantidad'].setValue(this.quantity)
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  validate(control: AbstractControl): any {
    const quantity = control.value;
    if (quantity < 3) {
      return {
        mustBePositive: {
          quantity
        }
      };
    }
  }

}
