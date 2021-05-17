import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-overview-categories-cb',
  templateUrl: './overview-categories-cb.page.html',
  styleUrls: ['./overview-categories-cb.page.scss'],
})
export class OverviewCategoriesCbPage implements OnInit {

  public categories: any;

  public postData = {
    lng: ''
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang('en');
  }
  

  ngOnInit() {
    var lng = this.translateService.getBrowserLang();
    this.postData.lng = lng;
    this.translateService.use(lng);
    this.authService.getOverViewAllCategories(this.postData).subscribe(
        (res: any) => {
          this.categories = res;
          console.log(res);
        },
        (error: any) => {
          this.toastService.presentToast('Problema en la red.');
        }
      );
  }

  public clickCategory(item): void{
    this.openPartner(item);
  }

  openPartner(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        item: item
      }
    };
    this.router.navigate(['/overview-partners-cb'], navigationExtras);
  }

}
