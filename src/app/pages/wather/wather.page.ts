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
  url = {
    urlMalaga:
      'https://api.openweathermap.org/data/2.5/forecast?q=malaga&cnt=7&appid=388264f755c601e7590e2a681627567e&units=metric',
    urlSabinilla:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlManilva:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlCasares:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlEstepona:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlSanPedro:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlMarbella:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlSotogrande:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlAlgecirasna:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlCastellar:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlTarifa:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlVejer:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlBarbate:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlConil:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlChiclana:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlCadiz:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
    urlJerez:
      'https://api.openweathermap.org/data/2.5/weather?lat=36.36728&lon=-5.22785&appid=388264f755c601e7590e2a681627567e',
  }

  peticion: string =
    'https://api.openweathermap.org/data/2.5/forecast?q=malaga&cnt=7&appid=388264f755c601e7590e2a681627567e&units=metric'
  error: any

  ciudad: any
  icon: any
  temperatura: any
  temperaturaMax: any
  temperaturaMin: any
  resultados: Array<any> = []
  resultadosMalaga: any

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
    // this.tiempoMalaga()
  }

  onSubmit(): void {
    // <----
    console.log(
      'onSubmit(): this.totalAngularPackages: ' + this.totalAngularPackages,
    )
  }

  back() {
    this.post = null
    this.postData.id = null
  }
  // tiempoMalaga() {
  //   this.http.get<any>(this.url.urlMalaga).subscribe(
  //     (data) => {
  //       console.log(data)
  //       this.resultadosMalaga = data
  //       this.resultados.push(this.resultadosMalaga)
  //       this.totalAngularPackages = data
  //       this.ciudad = data
  //       this.icon = data.weather[0]
  //       this.temperaturaMax = data.main.temp_max - 273.15
  //       this.temperaturaMin = data.main.temp_min - 273.15
  //       this.temperatura = data.main.temp - 273.15
  //       console.log(this.resultados)
  //       return data
  //     },
  //     (error) => (this.error = error),
  //   )
  // }

  searchAction(event) {
    if (event.detail.value != '') {
      this.http
        .get<any>(
          `https://api.openweathermap.org/data/2.5/forecast?q=${event.detail.value}&cnt=7&appid=388264f755c601e7590e2a681627567e&units=metric`,
        )
        .subscribe(
          (data) => {
            this.resultados.push(data)
            console.log(data)
          },
          (error) => (this.error = error),
        )
    }

    console.log(event)
  }
}
