import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {
  table: any;
  constructor(private api: ApiService) {
    this.table = api.sharedData
    console.log(this.table)
  }

}
