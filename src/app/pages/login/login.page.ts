import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { TranslateService } from '@ngx-translate/core';

import { LoadingController, AlertController  } from '@ionic/angular';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

import { FCM } from 'capacitor-fcm';

const { PushNotifications } = Plugins;

const fcm = new FCM();

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {

  postData = {
    email: '',
    password: ''
  };


  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang('en');
  }

  public showPassword: boolean = false;

  ngOnInit() {
    this.setLanguage()
  }

  setLanguage(){
    var lng = this.translateService.getBrowserLang();
    this.translateService.use(lng);
  }

  validateInputs() {
    let email = this.postData.email.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.email &&
      this.postData.password &&
      email.length > 0 &&
      password.length > 0
    );
  }

  overView(){
    this.router.navigateByUrl('/overview-choose');
  }


  public optionsFn(): void { //here item is an object 
    console.log(this.postData);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Usuario o contraseña incorrecta',
      buttons: ['OK']
    });

    await alert.present();
  }

  async loginAction() {
    if (this.validateInputs()) {
      const loading = await this.loadingController.create({
        message: 'Cargando...',
      });
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res) {
          // Storing the User data.
          loading.dismiss();
          //console.log(res.access_token);
          window.localStorage.setItem('access_token', res.access_token);
          window.localStorage.setItem('id_user', res.id_user);
          window.localStorage.setItem('login', "1");
          window.localStorage.setItem('location', res.location);
          this.router.navigateByUrl('/home/tabs/tab1');
          } else {

            loading.dismiss();
            this.presentAlert();
          }
        },
        (error: any) => {
          loading.dismiss();
          console.log(error);
          this.presentAlert();
        }
      );
    } else {
      this.toastService.presentToast('Porfavor rellena los campos.');
    }
  }

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }


 

}