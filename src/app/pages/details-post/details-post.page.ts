import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { ToastService } from '../../services/toast.service'
import { Platform, AlertController } from '@ionic/angular'
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.page.html',
  styleUrls: ['./details-post.page.scss'],
})
export class DetailsPostPage implements OnInit {
  postData = {
    id: '',
    location: '',
  }

  lat: any
  lng: any
  height = 0
  zoom: any

  post: any

  constructor(
    public platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    public alertController: AlertController,
    public location: Location,
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back()
      this.location.back()
    })

    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postData.id = this.router.getCurrentNavigation().extras.state.item.id

        console.log(this.postData.id)
        let location = window.localStorage.getItem('location')
        this.postData.location = location
        this.authService.getPostById(this.postData).subscribe(
          (res: any) => {
            // res.images = JSON.parse(res.images)
            console.log(res)
            this.post = res
          },
          (error: any) => {
            this.toastService.presentToast('Problema en la red.')
          },
        )
      }
    })
  }

  async presentAlertLlamada() {
    const alert = await this.alertController.create({
      header: 'Réserver',
      message:
        'Possibilité de réaliser une réservation avec Zapinvest de 10h00 à 17h30\nMerci beaucoup',
      buttons: [
        {
          text: 'Annuler',
        },
        {
          text: 'Appel',
          handler: () => {
            window.open('tel:34663318834', '_system')
          },
        },
      ],
    })

    await alert.present()
  }

  ngOnInit() {}

  async presentAlertAviso() {
    const alert = await this.alertController.create({
      header: 'Réserver',
      message:
        'Possibilité de réaliser une réservation avec Zapinvest de 10h00 à 17h30\nMerci beaucoup',
      buttons: ['Ok'],
    })

    await alert.present()
  }

  async clickReserva() {
    var timeNow = new Date()
    var timeString = timeNow.getHours() + ':' + timeNow.getMinutes()
    var range = ['10:00', '17:30']

    if (this.isInRange(timeString, range)) {
      this.presentAlertLlamada()
    } else {
      this.presentAlertAviso()
    }
  }

  isInRange(value, range) {
    return value >= range[0] && value <= range[1]
  }

  back() {
    this.post = null
    this.postData.id = null
  }
}
