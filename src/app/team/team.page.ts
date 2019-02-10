import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  public myTeam: any;

  constructor(private http: HttpServiceService) { }

  ngOnInit() {
    this.http.do('get', '/myteam')
      .then((response) => {
        this.myTeam = response.body;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
