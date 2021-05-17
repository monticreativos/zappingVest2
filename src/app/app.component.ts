import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';


import { FCM } from 'capacitor-fcm';

const { PushNotifications } = Plugins;

const fcm = new FCM();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      let login = window.localStorage.getItem('login');
      console.log("Login: "+login);
      if (login=="1"){
        this.router.navigateByUrl('/home/tabs/tab1');
      }else{
        this.router.navigate(["/login"]);
      }
    });
  }

  ngOnInit() {
    console.log('Initializing app');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register()
        .then(() => {
          //
          // Subscribe to a specific topic
          // you can use `FCMPlugin` or just `fcm`
          fcm
            .subscribeTo({ topic: "all" })
            .then(r => console.log('subscribe to topic'))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(JSON.stringify(err)));
      } else {
        // Show some error
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log('Click on notification!: ' + JSON.stringify(notification));
        this.router.navigateByUrl('/home/tabs/tab4');
      }
    );
  }


}
