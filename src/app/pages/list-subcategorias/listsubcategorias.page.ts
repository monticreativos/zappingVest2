import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { StorageService } from '../../services/storage.service'
import { ToastService } from '../../services/toast.service'
import { Router, NavigationExtras } from '@angular/router'

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
  public categories: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.authService.getSubCategorias().subscribe(
      (res: any) => {
        this.categories = res
        console.log(res)
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  public clickCategory(item): void {
    this.openPartner(item)
  }

  openPartner(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        item: item,
      },
    }
    this.router.navigate(['home/tabs/tabs2/listCategory'], navigationExtras)
  }
}
