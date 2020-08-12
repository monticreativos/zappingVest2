
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { LoadingController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {
  postData = {
    id: ''
  }
  listParnet: any;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private toastService: ToastService, private alertController: AlertController, private platform: Platform) {


    this.platform.backButton.subscribeWithPriority(10, () => {
      this.listParnet = null;
      this.postData.id = null;
      this.router.navigate(['home/tabs/tab2']);
    });

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postData.id = this.router.getCurrentNavigation().extras.state.item.id;
        console.log("id categoria: "+this.postData.id);
        this.authService.getPartner(this.postData).subscribe(
          (res: any) => {

            res.forEach(element => {
              element.images = JSON.parse(element.images);
            });

            this.listParnet = res;

            console.log(this.listParnet);
          },
          (error: any) => {
            this.toastService.presentToast('Problema en la red.');
          }
        );
      }
    });
  }

  ngOnInit() {}

  back(){
    this.listParnet = null;
    this.postData.id = null;
  }

  viewPartner(item){
    let navigationExtras: NavigationExtras = {
      state: {
        item: item
      }
    };
    this.router.navigate(['home/tabs/tabs2/listCategory/detailsPartner'], navigationExtras);
  }

  infoDiscount(item){
    this.presentAlert(item);
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      header: 'Descuento',
      message: item.discount,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Ver',
          handler: () => {
            console.log('Confirm Okay');
            this.viewPartner(item);
          }
        }
      ]
    });

    await alert.present();
  }


}
