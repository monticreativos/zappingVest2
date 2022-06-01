import { Component } from '@angular/core'
import { AuthService } from './../../services/auth.service'
import { ToastService } from './../../services/toast.service'
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  public posts: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.authService.getAllPost().subscribe(
      (res: any) => {
        this.posts = res
        console.log(res)
      },
      (error: any) => {
        this.toastService.presentToast('Problema en la red.')
      },
    )
  }

  public clickCategory(item): void {
    this.viewPartner(item)
  }

  viewPartner(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        item: item,
      },
    }
    this.router.navigate(['home/tabs/tab6/detailsPost'], navigationExtras)
  }
}
