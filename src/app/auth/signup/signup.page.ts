import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpServiceService} from '../../http-service.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public signupForm: FormGroup;

  constructor(
    private http: HttpServiceService,
    private alertController: AlertController,
    private router: Router,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_repeat: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      pseudo: new FormControl('', [Validators.required]),
      rang: new FormControl('', [Validators.required]),
      steamlink: new FormControl('', [Validators.required]),
    });
  }

  public signup() {
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      this.http.do('post', '/signup', this.signupForm.value)
        .then((response: any) => {
          console.log(response);
          if (response.status === 201) {
            this.router.navigate(['signin']);
            return this.presentAlert();
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

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Votre inscription est Okay',
      message: 'Veuillez vous connecter !',
      buttons: ['OK']
    });

    await alert.present();
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
