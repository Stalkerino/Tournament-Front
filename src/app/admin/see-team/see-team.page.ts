import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../http-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-see-team',
  templateUrl: './see-team.page.html',
  styleUrls: ['./see-team.page.scss'],
})
export class SeeTeamPage implements OnInit {

  public team: any;

  constructor(private http: HttpServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.do('get', '/getTeam/' + this.route.snapshot.paramMap.get('id'))
      .then((response) => {
        this.team = response.body;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
