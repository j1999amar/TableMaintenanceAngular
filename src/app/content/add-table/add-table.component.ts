import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import { TableData } from '../model/TableData';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent {
  tableData:TableData=new TableData;
  addTableForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.addTableForm = this.fb.group({
      Name: ['', Validators.required,],
      Type: ['', Validators.required],
      Description: [''],
      Comment: ['', Validators.maxLength(2408)],
      premium: ['']
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
      console.log(this.addTableForm.value)
      this.tableData=this.addTableForm.value;
      this.api.addTable(this.tableData).subscribe((response: any) => {
        console.log(response)
        if (response.id != "") {
          alert("Table is added")
          // window.location.href = '/'
        } else {
          alert("Table is not added")

        }
      })
    }
  }

}
