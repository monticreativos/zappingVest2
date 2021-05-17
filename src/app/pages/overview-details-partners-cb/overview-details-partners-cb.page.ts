import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Platform, AlertController } from "@ionic/angular";
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-overview-details-partners-cb',
  templateUrl: './overview-details-partners-cb.page.html',
  styleUrls: ['./overview-details-partners-cb.page.scss'],
})
export class OverviewDetailsPartnersCbPage implements OnInit {

  postData = {
    id: '', 
    lng: '',
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
            public location: Location,
            private translateService: TranslateService,
            ) {
    this.translateService.setDefaultLang('en');      
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back();
      this.location.back();
    });

    this.postData.lng = this.translateService.getBrowserLang();
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postData.id = this.router.getCurrentNavigation().extras.state.item.id;
        this.authService.getDetailsPartnerOverViewCb(this.postData).subscribe(
          (res: any) => {
            res.images = JSON.parse(res.images);

            this.detailsPartner = res;
            this.detailsPartner.description = this.nl2br(this.detailsPartner.description);
            console.log(this.detailsPartner);
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

  nl2br(text: string) {

   return text.replace('\\r\\n', '<br/>');
  }

  back(){
    this.detailsPartner = null;
    this.postData.id = null;
  }
  

}
