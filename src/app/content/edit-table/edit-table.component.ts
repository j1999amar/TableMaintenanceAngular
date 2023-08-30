import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableData } from '../model/TableData';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  table: any;
  tableData: TableData = new TableData;


  addTableForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {
    const table: any = this.api.sharedData;


    this.addTableForm = this.fb.group({
      Id: [table.id],
      Name: [table.name, Validators.required,],
      Type: [table.type, Validators.required],
      Description: [table.description],
      Comment: [table.comment, Validators.maxLength(2408)],
      premium: [table.premium]
    })
  }
  onRadioClick(event: Event) {
    const selectedValue = (event.target as HTMLInputElement).value;
    const currentType = this.addTableForm.get('Type').value;

    if (selectedValue === currentType) {
      this.addTableForm.get('Type').setValue('');
    } else {
      this.addTableForm.get('Type').setValue(selectedValue);
    }
  }

  submitForm() {
    if (this.addTableForm.valid) {

      if(this.addTableForm.value.premium){
        this.tableData=this.addTableForm.value;
        this.tableData.premium=1;
      }else{
        this.tableData=this.addTableForm.value;
        this.tableData.premium=0;
      }
      this.api.EditTable(this.tableData).subscribe((response: any) => {
        if (response.id != "") {
          alert("Table is updated")
          window.location.href = '/'
        } else {
          alert("Table is not updated")

        }
      })
    }
  }
}
