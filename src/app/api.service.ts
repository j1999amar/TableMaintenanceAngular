import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { TableData } from './content/model/TableData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {


  }
  sharedData: any;

  getSearchTable(tableName: string, typeList: string[]) {
    console.log(typeList)
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    let params = new HttpParams()
      .set('tableName', tableName)
    for (let i = 0; i < typeList.length; i++) {
      params = params.append('typeList', typeList[i])
    }
    const options = { headers, params };
    return this.http.get('https://localhost:7248/TableMaintenance/SearchTable', options);
  }

  addTable(data:TableData) {
    console.log(data)
    return this.http.post('https://localhost:7248/TableMaintenance/AddTable', data)
  }

  deleteTable(data: any) {
    return this.http.delete(`https://localhost:7248/TableMaintenance/deleteTable/${data}`)
  }
  shareTable(data: any) {
    this.sharedData = data
  }
  EditTable(data: any) {
    return this.http.put('https://localhost:7248/TableMaintenance/EditTable', data)
  }





}
