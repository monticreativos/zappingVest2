import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-subcategorias',
  templateUrl: 'listsubcategorias.page.html',
  styleUrls: ['listsubcategorias.page.scss'],
})
export class ListSubCategoriasPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  }
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
    this.authService.getSubCategories(this.postData).subscribe(
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
    this.router.navigate(['/home/tabs/tabs2/listSubCategory/details-partner'], navigationExtras);
  }
}
