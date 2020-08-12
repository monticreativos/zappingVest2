import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'config/auth-constants';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { ToastService } from './../../services/toast.service';
import { Storage } from  '@ionic/storage';
import { LoadingController, AlertController  } from '@ionic/angular';

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
    private alertController: AlertController
  ) {}

  public showPassword: boolean = false;

  ngOnInit() {}

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
    
    this.router.navigateByUrl('/overview-categories');
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
          console.log(res.access_token);
          window.localStorage.setItem('access_token', res.access_token);
          window.localStorage.setItem('id_user', res.id_user);
          window.localStorage.setItem('login', "1");
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