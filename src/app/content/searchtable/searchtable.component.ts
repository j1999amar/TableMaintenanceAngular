import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../api.service';
import { TableData } from '../model/TableData';

@Component({
  selector: 'app-searchtable',
  templateUrl: './searchtable.component.html',
  styleUrls: ['./searchtable.component.css'],
})
export class SearchtableComponent implements OnInit {
  display = 'd-none';
  data: any;
  p: number = 1;
  deleteDeatils: any;

  reactiveForm: FormGroup;
  checkboxOptions = [
    { label: 'Policy', value: 'policy' },
    { label: 'Risk', value: 'risk' },
    { label: 'Coverage', value: 'coverage' },
    { label: 'Form', value: 'form' },
    { label: 'Schedule', value: 'schedule' },
  ];
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.reactiveForm = this.fb.group({
      tableName: ['', [Validators.required]],
      policy: false,
      risk: false,
      coverage: false,
      form: false,
      schedule: false,
    });
  }

  selectAll() {
    this.checkboxOptions.forEach((option) =>
      this.reactiveForm.get(option.value)?.patchValue(true)
    );
  }

  clearAll() {
    this.checkboxOptions.forEach((option) =>
      this.reactiveForm.get(option.value)?.patchValue(false)
    );
  }

  submitForm() {
    if (this.reactiveForm.valid) {
      const selectedCheckboxes: any[] = this.checkboxOptions
        .filter((option) => this.reactiveForm.get(option.value)?.value === true)
        .map((option) => option.value);
      this.api
        .getSearchTable(this.reactiveForm.value.tableName, selectedCheckboxes)
        .subscribe(
          response => {
            (this.data = response), (this.display = 'd-block');
          },
          error => {
            let errorMessage=''
            errorMessage = 'An error occurred: ' + error.error;
            alert(errorMessage);
            this.reactiveForm.reset();
            // window.location.href = '/searchTable';
          }
        );
    }
  }

  deleteId(deleteId) {
    this.deleteDeatils = deleteId
  }

  DeleteTable(id:TableData) {

    this.api.deleteTable(id).subscribe((response: any) => {
      this.deleteDeatils = '';
      if (response.value = "Deleted") {
        alert("Table Deleted Successfully")
        window.location.href = "/"
      }
    }, error => {
      console.log(error)

      let errorMessage=''
      errorMessage = 'An error occurred: ' + error.error.value.status;
      alert(errorMessage);
      window.location.href = '/searchTable';
    })
  }

  shareTable(data: TableData) {
    this.api.sharedData = data
  }

  ngOnInit(): void { }
}
