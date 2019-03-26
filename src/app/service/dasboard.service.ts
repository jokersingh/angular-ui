import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTable } from '../model/datatable.model'

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getTableData() {
    return this.httpClient.get<DataTable>(this.baseUrl+'/dashboard/datatable');
  }
}
