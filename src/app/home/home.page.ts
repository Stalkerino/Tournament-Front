import { Component } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpServiceService, private toast: ToastController) { }

  public logout() {
    this.http.do('get', '/logout')
      .then((response) => {
        if (response.status === 202) {
          this.presentToast('Logout successful');
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
