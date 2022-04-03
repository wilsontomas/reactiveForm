import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder,FormGroup,NG_VALIDATORS,NG_VALUE_ACCESSOR,Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChildFormComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChildFormComponent
    },
  ]
  
})
export class ChildFormComponent implements OnInit, ControlValueAccessor {

  constructor(private fb:FormBuilder) { }
  segundoForm:FormGroup=new FormGroup({});

  buildForm(){
  this.segundoForm= this.fb.group({
    direccion: [null, [Validators.required]],
    numero: [0, [Validators.required,Validators.min(1)]],
    
  });
  }


  onTouched: Function = () => {};

  onChangeSubs: Subscription[] = [];

  
  ngOnDestroy() {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  registerOnChange(onChange: any) {
    const sub = this.segundoForm.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(onTouched: Function) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.segundoForm.disable();
    }
    else {
      this.segundoForm.enable();
    }
  }

  writeValue(value: any) {
    if (value) {
      this.segundoForm.setValue(value, {emitEvent: false});
    }
  }

  validate(control: AbstractControl) {

    if (this.segundoForm.valid) {
      return null;
    }

    let errors : any = {};

    errors = this.addControlErrors(errors, "direccion");
    errors = this.addControlErrors(errors, "numero");
   

    return errors;
  }

  addControlErrors(allErrors: any, controlName:string) {

    const errors = {...allErrors};

    const controlErrors = this.segundoForm.controls[controlName].errors;

    if (controlErrors) {
      errors[controlName] = controlErrors;
    }

    return errors;
  }


  ngOnInit(): void {
    this.buildForm();
  }
  onSubmit(event:any){
    event.preventDefault();
    if(this.segundoForm.valid){
      console.log('hijo valido')
    }else{
      console.log('hijo invalido')
    }
  }

}
