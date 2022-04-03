import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-primer-form',
  templateUrl: './primer-form.component.html',
  styleUrls: ['./primer-form.component.scss']
})
export class PrimerFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  primerForm:FormGroup=new FormGroup({});
formBuild(){
  this.primerForm=this.fb.group({
    nombre:[null,[Validators.required]],
    contador:[0,[Validators.required]],
    informacion:[null,[Validators.required]],

  })
}
  ngOnInit(): void {
    this.formBuild();
  }
  
  onSubmit(){
    if(this.primerForm.valid){
    console.log('validado');
    }else{
      console.log('invalido')
    }
    console.log(this.primerForm.value);
  }

}
