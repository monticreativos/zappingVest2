import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController  } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.page.html',
  styleUrls: ['./invite-friend.page.scss'],
})
export class InviteFriendPage implements OnInit {

  postData = {
    id_user: '',
    email: '',
    nombre: '',
    apellido: '',
    telefono: ''
  };

  postDataUser = {
    id: ''
  }

  public listFriends: any;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastService: ToastService
    ) { }

  ngOnInit() {
    this.getFriendsValidates();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'vous devez remplir tous les champs antérieurs.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertOK() {
    const alert = await this.alertController.create({
      header: 'Confirmé',
      message: 'Invitation envoyé',
      buttons: ['OK']
    });

    await alert.present();
  }

  getFriendsValidates(){
    this.postDataUser.id = window.localStorage.getItem("id_user");
    this.authService.getFriendsValidates(this.postDataUser).subscribe(
      (res: any) => {
        console.log(res);
        this.listFriends = res;
        console.log(this.listFriends);
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.');
      }
    );
  }

  validateInputs(){
    let email = this.postData.email.trim();
    let nombre = this.postData.nombre.trim();
    let apellido = this.postData.apellido.trim();
    let telefono = this.postData.telefono.trim();

    return (
      this.postData.email &&
      this.postData.nombre &&
      this.postData.apellido &&
      this.postData.telefono &&
      email.length > 0 &&
      nombre.length > 0 &&
      apellido.length > 0 &&
      telefono.length > 0
    );
  }



  async sendEmail(){
    if (this.validateInputs()){
      const loading = await this.loadingController.create({
        message: 'Chargement...',
      });
      let user_id = window.localStorage.getItem('id_user');
      this.postData.id_user = user_id;
      this.authService.inviteFriend(this.postData).subscribe(
        (res: any) => {
          loading.dismiss();
          this.presentAlertOK();
          this.postData.nombre = '';
          this.postData.apellido = '';
          this.postData.telefono = '';
          this.postData.email = '';
        },
        (error: any) => {
          this.toastService.presentToast('Problema en la red.');
          loading.dismiss();
        }
      );
    }else{
      this.presentAlert();
    }
  }

}
