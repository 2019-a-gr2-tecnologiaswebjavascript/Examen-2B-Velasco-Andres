import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthHttpService} from "./servicios/http/http-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private readonly _authHttpService:AuthHttpService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  estaLogeado(){
      return this._authHttpService.estaLogeado;
  }

  nombreUsuario(){
      return this._authHttpService.usuario.nombre;
  }
}
