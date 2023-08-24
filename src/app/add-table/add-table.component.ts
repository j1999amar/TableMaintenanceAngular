import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {
  addTableForm:FormGroup;
 constructor(private fb:FormBuilder,private api:ApiService){
this.addTableForm=this.fb.group({
  Name:['',Validators.required,],
  Type:['',Validators.required],
  Description:[''],
  Comment:['',Validators.maxLength(2408)],
  preminum:['']
})
 }
 submitForm(){
  if(this.addTableForm.valid){
    this.api.addTable(this.addTableForm.value).subscribe((response:any)=>{
      console.log(response)
      if(response.id!=""){
        alert("Table is added")
        window.location.href='/'
      }else{
        alert("Table is not added")

      }
    })
  }
 }

}
