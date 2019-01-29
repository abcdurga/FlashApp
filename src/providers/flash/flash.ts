import { Injectable } from '@angular/core';

import {Plugin, Cordova, CordovaProperty, CordovaInstance, IonicNativePlugin} from '@ionic-native/core';

@Plugin(
  {
    pluginName: "darkflash",
    plugin: "cordova-plugin-darkflash",
    pluginRef: "Darkflash",
    repo: "https://github.com/abcdurga/DarkFlash.git",
    platforms: ['Android', 'iOS']
  }
)

@Injectable()
export class FlashProvider {

  @Cordova()
  coolMethod(arg1:any):Promise<string>
  {
    console.log("2 inside flash provider : "+arg1);
    return;
  }

  @Cordova()
  openCamera(arg1:any):Promise<string>
  {
    return;
  }

}
