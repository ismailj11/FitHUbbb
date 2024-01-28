import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoachesService } from '../../../core/services/coaches.service';

@Component({
  selector: 'app-coach-add-edit',
  templateUrl: './coach-add-edit.component.html',
  styleUrl: './coach-add-edit.component.scss'
})
export class CoachAddEditComponent implements OnInit {
   cform: FormGroup;

    Tyofwork: string[]=[
      
      'Mobile Personal Trainers',
      'Performance Personal Trainers',
      'Lifestyle Personal Trainers'
    ]


constructor(private _fb: FormBuilder,private _cService: CoachesService, private _dialogRedf: MatDialogRef<CoachAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){
this.cform =this._fb.group({
  firstName:'',
  lastName: '',
  email: '',
  age: '',
  gender:'',
  worktype:'',
  experience:'',

})
}
ngOnInit(): void {
  this.cform.patchValue(this.data);
}
onFormSubmit(){
  if(this.cform.valid){
    if(this.data){
      this._cService.updateCoach(this.data.id,this.cform.value).subscribe({
        next: (val:any)=>{
    alert('Coaches details updated ')
    this._dialogRedf.close(true);
        },
        error:(err: any)=>{
       console.error(err);
        },
      });
    }
    else{
      this._cService.addCoach(this.cform.value).subscribe({
        next: (val:any)=>{
    alert('Coaches added successfully')
    this._dialogRedf.close(true);
        },
        error:(err: any)=>{
       console.error(err);
        },
      });
    }

    
    
  }
}
}
