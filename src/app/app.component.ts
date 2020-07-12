import { Component } from '@angular/core';
import { Dish } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  app = ["angular", "react", "vue"];
  //userModel = new User('sapkal@1213gmail.com', 'sapkal', 8975187559, '', '9.0 AM', true);
}
