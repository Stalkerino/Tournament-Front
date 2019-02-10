import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpServiceService} from './http-service.service';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(private http: HttpServiceService, private route: Router, private toast: ToastController) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.http.do('get', '/admin')
      .then((response) => {
        if (response.status === 200) {
          return true;
        } else {
          this.presentToast('Not administrator');
          this.route.navigate(['home']);
          return false;
        }
      })
      .catch(() => {
        this.presentToast('Not administrator');
        this.route.navigate(['home']);
        return false;
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
