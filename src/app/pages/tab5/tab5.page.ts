import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { ToastService } from '../../services/toast.service'
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {
  public events: any

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.authService.getAllEventos().subscribe(
      (res: any) => {
        this.events = res
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
