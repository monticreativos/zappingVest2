import { Component, OnInit } from '@angular/core'
import { AuthService } from './../../services/auth.service'
import { StorageService } from './../../services/storage.service'
import { ToastService } from './../../services/toast.service'
import { Router } from '@angular/router'
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx'
import {
  ActionSheetController,
  Platform,
  LoadingController,
  AlertController,
} from '@ionic/angular'
import {
  Camera,
  CameraOptions,
  PictureSourceType,
} from '@ionic-native/camera/ngx'
import { NavController } from '@ionic/angular'
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core'
import { DomSanitizer } from '@angular/platform-browser'

import { FCM } from 'capacitor-fcm'

const { PushNotifications } = Plugins

const fcm = new FCM()

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public authUser: any
  public savings: any
  public savingsTotal: any
  public points: any
  segment: string

  postData = {
    id: '',
  }
  videoOpts: VideoOptions
  postDataImage = {
    id_user: '',
    imgBase64: '',
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private plt: Platform,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private videoPlayer: VideoPlayer,
    public sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {}

  onSubmit() {
    // <----
    this.router.navigate(['home/tabs/forecast'])
  }
  ionViewWillEnter() {
    this.getData()
    //console.log('ionViewWillEnter FIRST');
  }

  getData() {
    this.authUser = null
    this.segment = 'discounts'
    this.authService.getUser().subscribe(
      (res: any) => {
        this.authUser = res
        //console.log(res);
        this.postData.id = res.id
        this.getSavings(this.postData)
        this.getPointsSave(this.postData)
        this.getSavingsTotal(this.postData)
        if (res.location == 'Costa del Sol') {
          console.log('CS')
          fcm
            .unsubscribeFrom({ topic: 'CB' })
            .then(() => console.log('unsubscribed from topic CDS'))
            .catch((err) => console.log(err))
          fcm
            .subscribeTo({ topic: 'CDS' })
            .then((r) => console.log('subscribe to CDS'))
            .catch((err) => console.log(err))
        } else {
          console.log('CB')
          fcm
            .unsubscribeFrom({ topic: 'CDS' })
            .then(() => console.log('unsubscribed from topic CDS'))
            .catch((err) => console.log(err))
          fcm
            .subscribeTo({ topic: 'CB' })
            .then((r) => console.log('subscribe to CDS'))
            .catch((err) => console.log(err))
        }
      },
      (error: any) => {
        this.navCtrl.navigateRoot('/login', {
          animated: true,
          animationDirection: 'forward',
        })
      },
    )
  }

  logout() {
    this.authService.logout()
  }

  changePhoto() {
    this.selectImage()
  }

  segmentChanged(ev: any) {
    //console.log('Segment changed', ev);
  }

  getSavings(id) {
    this.authService.getSaving(id).subscribe(
      (res: any) => {
        this.savings = res
        //console.log(this.savings);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  getSavingsTotal(id) {
    this.authService.getSavingTotal(id).subscribe(
      (res: any) => {
        this.savingsTotal = res
        //console.log("Total: "+this.savingsTotal);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  getPointsSave(id) {
    this.authService.getPointsSave(id).subscribe(
      (res: any) => {
        this.points = res
        //console.log(this.points);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  viewInfo() {
    this.router.navigate(['home/tabs/tabs1/info'])
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photo de profil',
      buttons: [
        {
          text: 'Galerie',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
          },
        },
        {
          text: 'Caméra',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA)
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
        },
      ],
    })
    await actionSheet.present()
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    }

    this.camera.getPicture(options).then((ImageData) => {
      //console.log(ImageData);
      let base64Image = 'data:image/jpeg;base64,' + ImageData
      //console.log(base64Image);
      this.uploadPhoto(base64Image)
    })
  }

  async uploadPhoto(file: any) {
    const loading = await this.loadingController.create({
      message: 'Chargement...',
    })
    await loading.present()
    let user_id = window.localStorage.getItem('id_user')
    this.postDataImage.id_user = user_id
    this.postDataImage.imgBase64 = file

    this.authService.updatePicProfile(this.postDataImage).subscribe(
      (res: any) => {
        loading.dismiss()
        this.authUser = res
        //onsole.log(res);
      },
      (error: any) => {
        loading.dismiss()
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  public playVideo() {
    this.videoPlayer
      .play('https://desarrollo.crmhawkins.com/storage/videos/intro.mp4')
      .then(() => {
        console.log('video completed')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  public playVideoHosted() {
    this.videoPlayer
      .play('https://desarrollo.crmhawkins.com/storage/videos/intro.mp4')
      .then(() => {
        console.log('video completed')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
