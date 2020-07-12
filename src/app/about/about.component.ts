import { Component, OnInit, Inject } from '@angular/core';
import { LeadersService } from '../leaders.service';
import { Leader } from '../leader';
import { baseURL } from '../baseurl';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess;

  constructor(private leaderservice: LeadersService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {

    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        errmess => this.errMess = <any>errmess);




  }


}
