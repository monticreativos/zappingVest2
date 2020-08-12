import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { Platform, AlertController } from "@ionic/angular";
import { Location } from '@angular/common';

@Component({
  selector: 'app-overview-details-partners',
  templateUrl: './overview-details-partners.page.html',
  styleUrls: ['./overview-details-partners.page.scss'],
})
export class OverviewDetailsPartnersPage implements OnInit {

  postData = {
    id: ''
  }

  lat: any;
  lng: any;
  height = 0;
  zoom: any;

  detailsPartner: any;

  constructor(
            public platform: Platform, 
            private route: ActivatedRoute, 
            private router: Router, 
            private authService: AuthService, 
            private toastService: ToastService,
            public alertController: AlertController,
            public location: Location
            ) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back();
      this.location.back();
    });
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postData.id = this.router.getCurrentNavigation().extras.state.item.id;
        this.authService.getOverViewsDetailsPartner(this.postData).subscribe(
          (res: any) => {
            res.images = JSON.parse(res.images);

            this.detailsPartner = res;

            this.lat = this.detailsPartner.coordX;
            this.lng = this.detailsPartner.coordY;
            this.height = 400;
            this.zoom = 7;

          },
          (error: any) => {
            this.toastService.presentToast('Problema en la red.');
          }
        );
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.detailsPartner = null;
    this.postData.id = null;
  }
  

}
