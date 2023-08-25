import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  table: any;


  addTableForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {
    const table: any = this.api.sharedData;

    console.log(table)

    this.addTableForm = this.fb.group({
      Id: [table.id],
      Name: [table.name, Validators.required,],
      Type: [table.type, Validators.required],
      Description: [table.description],
      Comment: [table.comment, Validators.maxLength(2408)],
      preminum: [table.preminum]
    })
  }

  submitForm() {
    console.log(this.addTableForm.value)
    if (this.addTableForm.valid) {
      this.api.EditTable(this.addTableForm.value).subscribe((response: any) => {
        if (response.id != '') {
          alert('Table Updated')
          window.location.href = '/'
        } else {
          alert('Table is not updated')
        }



      })
    }
  }
}
