import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
@ViewChild("video",{static: true}) 
export class VideoPage implements OnInit {
  
  video: ElementRef; // binds to #video in video.html
  videoElement: HTMLVideoElement
  constructor( private router: Router ){}

  ionViewDidLoad() {
    this.videoElement = this.video.nativeElement;
    this.videoElement.play();

   }
  ngAfterViewInit() {
    setTimeout(() => {
       this.router.navigate(["/home/tabs/tab1"]);
    }, 12500);
   }
  ngOnInit() {
   
  }

}
