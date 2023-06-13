import { Component, OnInit } from '@angular/core';
import { ReturnCurrentResult } from 'src/app/models/return-current-result';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public currentData: any;
  public cityName: string = 'New Delhi';
  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
   
  }

  public getWeather(cityName: string){
    this.weatherService.getWeatherData(this.cityName).subscribe({ next:(respData: ReturnCurrentResult) => {
        if(respData){
          this.currentData = respData;
        } 
      }, error(err) {
        console.log('Something went wrong!');
      }
    });
  }

  onSubmit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }
}
