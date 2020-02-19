import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-metro-list',
  templateUrl: './metro-list.component.html',
  styleUrls: ['./metro-list.component.css']
})
export class MetroListComponent implements OnInit {
  //-- this list can be dynamic or we can use map to take input of metro city
  //-- this list is just for ilustration purpose.
  private _metroCityIDs = [
    1273294,
    1275339,
    1270644,
    1260086
  ];

  MetroList = [];

  constructor(private myClient:HttpClient) {

   }

  ngOnInit() {
    let _metroCityIDsCSV = "";
    for(var i=0; i< this._metroCityIDs.length; i++){
      _metroCityIDsCSV += this._metroCityIDs[i] + ",";
    }
    
    _metroCityIDsCSV = _metroCityIDsCSV.substring(0, _metroCityIDsCSV.length - 1);

    console.log(_metroCityIDsCSV);

    this.myClient.get("http://api.openweathermap.org/data/2.5/group?id="+ _metroCityIDsCSV +"&units=metric&appid=069a60563a31c8c8d052f3c37b3b5110").subscribe((data) =>{
      let serVData = data;            
      this.MetroList = serVData["list"];
      console.log(this.MetroList);
    });
  }

}
