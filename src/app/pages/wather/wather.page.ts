import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { HttpClient } from '@angular/common/http' // <----
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-wather',
  templateUrl: './wather.page.html',
  styleUrls: ['./wather.page.scss'],
})
export class WatherPage implements OnInit {
  title = 'http-get'
  totalAngularPackages: any
  url: string =
    'https://api.openweathermap.org/data/2.5/weather?lat=36.7196&lon=-4.42002&appid=388264f755c601e7590e2a681627567e'
  error: any

  ciudad: any
  icon: any
  temperatura: any
  temperaturaMax: any
  temperaturaMin: any

  post: any
  postData: any

  constructor(
    private location: Location,
    private platform: Platform,
    private http: HttpClient,
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back()
    })
  }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(
      (data) => {
        console.log(data)
        this.totalAngularPackages = data
        this.ciudad = data
        this.icon = data.weather[0]
        this.temperaturaMax = data.main.temp_max - 273.15
        this.temperaturaMin = data.main.temp_min - 273.15
        this.temperatura = data.main.temp - 273.15

        console.log(data.weather[0])
      },
      (error) => (this.error = error),
    )
  }

  onSubmit() {
    // <----
    console.log(
      'onSubmit(): this.totalAngularPackages: ' + this.totalAngularPackages,
    )
  }

  back() {
    this.post = null
    this.postData.id = null
  }
}
