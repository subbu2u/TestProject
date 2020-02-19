import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forcast-detail',
  templateUrl: './forcast-detail.component.html',
  styleUrls: ['./forcast-detail.component.css']
})
export class ForcastDetailComponent implements OnInit, OnDestroy {

  id: number;
  ForecastData: {}
  private routingEventSubscriber: any;

  constructor(private route: ActivatedRoute, private myClient:HttpClient) { }

  ngOnInit() {
    this.routingEventSubscriber = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
      
        console.log("CityID :" + this.id);
        // In a real app: dispatch action to load the details here.
        let strForecastURL = "https://samples.openweathermap.org/data/2.5/forecast/daily?id="+ this.id +"&appid=069a60563a31c8c8d052f3c37b3b5110";
        strForecastURL = "http://api.openweathermap.org/data/2.5/group?id="+ this.id +"&units=metric&appid=069a60563a31c8c8d052f3c37b3b5110"

        this.myClient.get(strForecastURL).subscribe((data) =>{
          let serVData = data;            
          this.ForecastData = serVData["list"][0];
          console.log(this.ForecastData);
      });
   });
  }

  ngOnDestroy() {
    this.routingEventSubscriber.unsubscribe();
  }
}
