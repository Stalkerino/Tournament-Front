import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpServiceService} from '../../http-service.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  public signinForm: FormGroup;

  constructor(private http: HttpServiceService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public signin() {
    if (this.signinForm.valid) {
      this.http.do('post', '/signin', this.signinForm.value)
        .then((response: any) => {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem('token', response.body.token);
            this.router.navigate(['user']);
            return this.presentToast('Success !');
          } else {
            return this.presentToast('Error dans le formulaire, vérifiez vos informations');
          }
        })
        .catch((err) => {
          return this.presentToast('Error dans le formulaire, vérifiez vos informations');
        });
    } else {
      return this.presentToast('Error dans le formulaire, vérifiez vos informations');
    }
  }

  public async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

}
