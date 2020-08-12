import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { AlertController, IonicSafeString } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationsList: any;

  constructor(
    public authService: AuthService, 
    public toastService: ToastService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.loadNotifications();
  }

  ionViewWillEnter() {
    this.loadNotifications();
  }


  loadNotifications(){
    this.authService.getAllNotifications().subscribe(
      (res: any) => {
        this.notificationsList = res;
        console.log(this.notificationsList);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.');
      }
    );
  }

  viewNotif(item){
    this.presentAlert(item);
  }

  async presentAlert(item) {
    var msg = new IonicSafeString(item.message);
    var message;

    if (item.url){
      message = msg.value+'<br><img src="'+item.url+'">';
    }else{
      message = msg.value;
    }

    const alert = await this.alertController.create({
      header: 'Notifications',
      message:  message,
      cssClass: 'content-notif',
      buttons: ['OK']
    });

    await alert.present();
  }


}
