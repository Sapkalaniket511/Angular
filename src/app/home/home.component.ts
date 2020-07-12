import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../dish.service';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';
import { Dish } from '../user';
import { LeadersService } from '../leaders.service';
import { Leader } from '../leader';
import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  dishErrMess: string;

  promotion: Promotion;
  leader: Leader;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leadersservice: LeadersService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.dishErrMess = <any>errmess);
    this.leadersservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
  }

}
