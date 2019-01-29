import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FlashProvider } from '../../providers/flash/flash';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public flash: FlashProvider) {

  }

  coolMethod(){
    console.log("1 first click");
    let data = "Hello World";
    this.flash.coolMethod(data).then(result => {
      alert("coolMethod Return result : "+result);
    }).catch(err => { 
      alert("coolMethod Error is : "+err);
    })
  }

  clickMe(){
    let data = {
      param1: "a",
      param2: "b",
    }

    this.flash.openCamera(data).then(result => {
      alert("openCamera Return result : "+result);
    }).catch(err => { 
      alert("openCamera Error is : "+err);
    })
  }

}
