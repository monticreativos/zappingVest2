import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Platform} from "@ionic/angular";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private location: Location, private platform: Platform) { 

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
    });

  }

  ngOnInit() {
  }

}
