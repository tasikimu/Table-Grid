import { Component, OnInit} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'ag-grid-enterprise'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private sideBar;
  private statusBar;
  public gridOptions;
  // private onColumnMoved;
 rowData: any;

  constructor(private http: HttpClient) {
    this.gridOptions = {
      rowData: this.rowData ,
      columnDefs: this.columnDefs,
      onGridReady: this.onGridReady,
      onColumnMoved: this.onColumnMoved,
      onColumnVisible: this.onColumnVisible,
      onfilterChanged: this.onfilterChanged	
    }
    this.columnDefs = [colDefFirstname, colDefLastname, 
      colDefGender, colDefUsername, colDefCity, colDefEmail, colDefZipCode];
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
//       width: 100,
      sortable: true,
      resizable: true,
      filter: true,
      hidden: true
    };
    this.sideBar = {
      toolPanels: ["filters", "columns"]
    };
    this.statusBar = {
      statusPanels: [
        {
          statusPanel: "agTotalRowCountComponent",
          align: "left",
          key: "totalRowComponent"
        },
        {
          statusPanel: "agFilteredRowCountComponent",
          align: "left"
        },
        {
          statusPanel: "agSelectedRowCountComponent",
          align: "center"
        },
        {
          statusPanel: "agAggregationComponent",
          align: "right"
        }
      ]
    };
  }

//   onBtApply(reverse) {
//     var cols = [];
//     if (getBooleanValue("#firstname")) {
//       cols.push(colDefFirstname);
//     }
//     if (getBooleanValue("#lastname")) {
//       cols.push(colDefLastname);
//     }
//     if (getBooleanValue("#gender")) {
//       cols.push(colDefGender);
//     }
//     if (getBooleanValue("#username")) {
//       cols.push(colDefUsername);
//     }
//     if (getBooleanValue("#city")) {
//       cols.push(colDefCity);
//     }
//     if (getBooleanValue("#email")) {
//       cols.push(colDefEmail);
//     }
//   if (getBooleanValue("#zipcode")) {
//     cols.push(colDefZipCode);
//   }
//     if (reverse) {
//       cols = cols.reverse();
//     }
//     this.gridApi.setColumnDefs(cols); 
//   }

  //Informs the grid that a filter hass changed.
  onfilterChanged	(params) {
    var columnState = JSON.stringify(params.columnApi.getColumnState());
    localStorage.setItem('myColumnState', columnState);
  }
  
  //When a column is being resized
  onColumnResized(params) {
    var columnState = JSON.stringify(params.columnApi.getColumnState());
    localstorage.setItem('myColumnState', columnState);
  }

  //A column, or group of columns, was hidden / shown
  onColumnVisible(params) {
    var columnState = JSON.stringify(params.columnApi.getColumnState());
    localStorage.setItem('myColumnState', columnState);
  }

  //When a column is being moved from one spot to another
  onColumnMoved(params) {
    var columnState = JSON.stringify(params.columnApi.getColumnState());
    localStorage.setItem('myColumnState', columnState);
  }

  //Use the grid's API to fix the column to size
  onGridReady(params) {
    var columnState = JSON.parse(localStorage.getItem('myColumnState'));
    if (columnState) {
      params.columnApi.setColumnState(columnState)
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
    //this.rowData = DataService;
    this.http.get("https://api.myjson.com/bins/1fj1m4").subscribe(data => {
        this.rowData = data;
      });
  }  
}

var colDefFirstname = {
  headerName: "Firstname",
  field: "firstname"
};
var colDefLastname = {
  headerName: "Lastname",
  field: "lastname"
};
var colDefGender = {
  headerName: "Gender",
  field: "gender"
};
var colDefUsername = {
  headerName: "Username",
  field: "username"
};
var colDefCity = {
  headerName: "City",
  field: "city"
};
var colDefEmail = {
  headerName: "Email",
  field: "email"
};
var colDefZipCode = {
  headerName: "ZipCode",
  field: "zipcode"
}

// window.addEventListener('online', () => this.changestate());

// window.onload = function() {
//   var container = document.getElementById('container');
//   container.addEventListener('contextmenu', function() {
//     console.log('Hello World...');
//   })
// }

function getBooleanValue(cssSelector) {
  return document.querySelector(cssSelector).checked === true;
}
