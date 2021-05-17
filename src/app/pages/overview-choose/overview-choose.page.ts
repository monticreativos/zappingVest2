import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-choose',
  templateUrl: './overview-choose.page.html',
  styleUrls: ['./overview-choose.page.scss'],
})
export class OverviewChoosePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  overviewCostaDelSol(){
    this.router.navigateByUrl('/overview-categories-cds');
  }

  overviewCostaBlanca(){
    this.router.navigateByUrl('/overview-categories-cb');
  }

}
