import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';

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
          (response) => {
            (this.data = response), (this.display = 'd-block');
          },
          (error) => {
            alert("Table Not Found");
            this.reactiveForm.reset();
            window.location.href = '/searchTable';
          }
        );
    }
  }

  deleteId(deleteId) {
    this.deleteDeatils = deleteId
  }

  DeleteTable(id: any) {
    this.api.deleteTable(id).subscribe((response: any) => {
      this.deleteDeatils = '';
      console.log(response.value)
      if (response.value = "Deleted") {
        alert("Table Deleted Successfully")
        window.location.href = "/"
      }
    })
  }

  shareTable(data: any) {
    this.api.sharedData = data
  }

  ngOnInit(): void { }
}
