import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { TableData } from './content/model/TableData';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    


  }
  sharedData: any;

  getSearchTable(tableName: string, typeList: string[]) {
    
    let params = new HttpParams()
      .set('tableName', tableName)
    for (let i = 0; i < typeList.length; i++) {
      params = params.append('typeList', typeList[i])
    }
    const options = {  params };
    return this.http.get(`${environment.apiUrl}/TableMaintenance/SearchTable`, options);
  }

  addTable(data:TableData) {
    return this.http.post(`${environment.apiUrl}/TableMaintenance/AddTable`, data)
  }

  deleteTable(data: any) {
    return this.http.delete(`${environment.apiUrl}/TableMaintenance/deleteTable/${data}`)
  }
  shareTable(data: TableData) {
    this.sharedData = data
  }
  EditTable(data: TableData) {
    return this.http.put(`${environment.apiUrl}/TableMaintenance/EditTable`, data)
  }





}
