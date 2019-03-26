import { Component, OnInit } from '@angular/core';
import { DasboardService } from '../service/dasboard.service'

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor(private dasboardService : DasboardService) { }

  columnDefs : any;
  rowData : any;

  ngOnInit() {

    this.dasboardService.getTableData().subscribe((data)=>{
      
      this.rowData = data.fileDetails;
      this.columnDefs = data.headers
      console.log(this.rowData);
    });

    // this.columnDefs = [
    //     {headerName: 'Make', field: 'make' },
    //     {headerName: 'Model', field: 'model' },
    //     {headerName: 'Price', field: 'price'}
    // ];

    // this.rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];
  }

}
