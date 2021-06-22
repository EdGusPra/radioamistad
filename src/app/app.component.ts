
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public info=[];
  title:any = 'RadioAmistad';
  options: AnimationOptions = {
    path: 'assets/img/lotti/loading-loop-animation.json',
    autoplay: true,
    loop: true
  };

  options2: AnimationOptions = {
    path: 'assets/img/lotti/circle.json',
    autoplay: true,
    loop: true
  };

  constructor(

  ){

  }
  
  ngOnInit(){



  }
}
