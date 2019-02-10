import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public userInfo: any;

  constructor(private http: HttpServiceService) { }

  ngOnInit() {
    this.http.do('get', '/me')
      .then((response) => {
        this.userInfo = response.body;
        console.log(this.userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
